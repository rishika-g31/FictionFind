const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db/connect");

const userRouter = require("./routes/user");
const bookRouter = require("./routes/book");
const favRouter = require("./routes/favourite");
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order");

app.use(cors());
app.use(express.json());

app.use("/api/v1", userRouter);
app.use("/api/v1", bookRouter);
app.use("/api/v1", favRouter);
app.use("/api/v1", cartRouter);
app.use("/api/v1", orderRouter);

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
