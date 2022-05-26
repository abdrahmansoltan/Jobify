// All the functions must be ASYNC as we're connecting to a DB

const createJob = async (req, res) => {
  res.send("create job");
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
