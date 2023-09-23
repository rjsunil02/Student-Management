const { Schema, model } = require("mongoose");

const mentorSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  EmailAddress: {
    type: String,
    required: true,
  },
});

exports.mentorModel = model("Mentor", mentorSchema);
