import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5000;

// ------------DB & AuthenticateUser------------ //
import connectDB from "./db/connect.js";

// ------------Routers------------ //
import authRouter from "./routes/authRoutes.js";

// ------------middleware------------ //
import notFoundMiddleware from "./middlewares/not-found.js";
import errorHandlerMiddleware from "./middlewares/error-handler.js";

app.use(express.json()); // make json-data available
app.get("/", (req, res) => {
  res.send("Welcome!");
});
app.use("api/v1/auth", authRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);

    // only connect to server if successfully-connected to DB
    app.listen(port, () =>
      console.log(`Server is listening on http://localhost:${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};
start();
