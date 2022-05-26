import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

// ------------middlewares------------ //
import notFoundMiddleware from "./middlewares/not-found.js";
import errorHandlerMiddleware from "./middlewares/error-handler.js";

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server is listening on http://localhost:${port}`)
);
