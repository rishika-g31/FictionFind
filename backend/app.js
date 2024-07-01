const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const connectDB = require("./db/connect");

const userRouter = require("./routes/user");

app.use("/api/v1", userRouter);

const port = process.env.PORT;
const start = async () => {
  try {
    //connect DB
    await connectDB(process.env.URI);
    app.listen(port, console.log(`Server is listening on port ${port}..`));
  } catch (error) {
    console.log(error);
  }
};

start();
