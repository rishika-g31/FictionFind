const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./db/connect");

const userRouter = require("./routes/user");
const bookRouter = require("./routes/book");
const favRouter = require("./routes/favourite");
app.use(express.json());

app.use("/api/v1", userRouter);
app.use("/api/v1", bookRouter);
app.use("/api/v1", favRouter);

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
