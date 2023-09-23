const { mentorModel } = require("../models/models");

exports.addOne = async (req, res) => {
  try {
    const post = new mentorModel(req.body);
    await post.save();
    res.send(post);
  } catch (error) {
    res.send(error);
  }
};
exports.getAll = async (req, res) => {
  try {
    const mentors = await mentorModel.find();
    res.status(200).json(mentors);
  } catch (error) {
    res.status(500).json({ error: "An error ocuuring mentor" });
  }
};

exports.updateOneById = async (req, res) => {
  try {
    const { id } = req.params;
    const query = req.body;
    const mentor = await mentorModel.findByIdAndUpdate(id, query);
    res.status(200).json({ id: mentor._id, message: "updated succesfully" });
  } catch (error) {
    res.status(500).json({ error: " An error occuring mentor" });
  }
};

exports.deleteOneById = async (req, res) => {
  try {
    const { id } = req.params;
    const mentor = await mentorModel.findByIdAndDelete(id);
    res.status(200).json({ id: mentor._id, message: "deleted sucessfully" });
  } catch (error) {
    res.status(500).json({ error: "an occuring an error" });
  }
};

exports.deleteAll = async (req, res) => {
  try {
    const data = req.query;
    const mentor = await mentorModel.deleteMany(data);
    res.status(200).json({ mentor, message: "multiple delete" });
  } catch (error) {
    res.status(500).json({ error: "an occuring an error" });
  }
};
