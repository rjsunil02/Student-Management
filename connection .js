const mongoose = require("mongoose");
const userName = "Sunil";
const password = "OslRJYRslvbzybzP";
const db = "sunil";
const cluster = "mernstack.7xemg28";

module.exports.connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      `mongodb+srv://${userName}:${password}@${cluster}.mongodb.net/${db}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
      }
    );
    console.log(`mongoDb is connected sucessfully in APP`);
  } catch (error) {
    console.error(error.message);
  }
};
