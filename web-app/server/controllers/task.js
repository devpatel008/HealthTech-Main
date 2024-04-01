const Task = require("../models/task");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllTasks = async (req, res) => {
  const {
    user: { userId },
    // params: { id: jobId },
  } = req;
  const tasks = await Task.find({ createdBy: userId });
  res.status(200).json({ tasks });
};

const createTask = async (req, res) => {
  const {
    user: { userId },
    // params: { id: jobId },
  } = req;
  const task = await Task.create({ ...req.body, createdBy: userId });
  res.status(201).json({ task });
};

const getTask = async (req, res, next) => {
  const { id: taskID } = req.params;
  const {
    user: { userId },
    // params: { id: jobId },
  } = req;
  const task = await Task.findOne({ _id: taskID, createdBy: userId });
  if (!task) {
    return res.status(404).json({ msg: `No task with id : ${taskID}` });
  }

  res.status(200).json({ task });
};
const deleteTask = async (req, res, next) => {
  const { id: taskID } = req.params;
  const {
    user: { userId },
    // params: { id: jobId },
  } = req;
  const task = await Task.findOneAndDelete({ _id: taskID, createdBy: userId });
  if (!task) {
    return res.status(404).json({ msg: `No task with id : ${taskID}` });
  }
  res.status(200).json({ task });
};
const updateTask = async (req, res, next) => {
  const { id: taskID } = req.params;
  const {
    user: { userId },
    // params: { id: jobId },
  } = req;
  const task = await Task.findOneAndUpdate(
    { _id: taskID, createdBy: userId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!task) {
    return res.status(404).json({ msg: `No task with id : ${taskID}` });
  }

  res.status(200).json({ task });
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
