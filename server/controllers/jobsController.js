import Job from "../models/Job.js";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from "../errors/index.js";

// -----All the functions must be ASYNC as we're connecting to a DB----- //

const createJob = async (req, res) => {
  const { position, company } = req.body;

  // only check if these 2 inputs exist as the other inputs are (select) so by default they will exist
  if (!position || !company) {
    throw new BadRequestError("Please provide all values");
  }
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const getAllJobs = async (req, res) => {
  res.send("get all jobs");
};
const deleteJob = async (req, res) => {
  res.send("delete job");
};
const updateJob = async (req, res) => {
  res.send("update job");
};
const showStats = async (req, res) => {
  res.send("show stats");
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
