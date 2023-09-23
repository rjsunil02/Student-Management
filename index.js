const { connectDB } = require("./connection ");
const express = require("express");
const app = express();
const PORT = 3000;
const router = require("./routes/routes");

connectDB();

app.use(express.json());

app.use("/mentor", router);

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
