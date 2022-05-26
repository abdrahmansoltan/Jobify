import User from "../models/user.js";
import { StatusCodes } from "http-status-codes";

// creating custom error status-code:
class CustomAPIError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST; // 400
  }
}

// here we're  replacing try-catch with "express-async-errors" Package which passes error to the errorHandler
const register = async (req, res) => {
  const { name, email, password } = req.body;
  // creating custom error message:
  if (!name || !email || !password) {
    throw new CustomAPIError("Please Provide all values");
  }

  const user = await User.create({ name, email, password });
  res.status(StatusCodes.CREATED).json({ user });
};
const login = (req, res) => {
  res.send("login user");
};
const updateUser = (req, res) => {
  res.send("updateUser");
};

export { register, login, updateUser };
