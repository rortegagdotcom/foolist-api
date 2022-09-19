import { RequestHandler } from "express";

import Task from "../models/Task";

export const getTasks: RequestHandler = async (req, res) => {
  try {
    const tasks = await Task.find();
    return res.json(tasks);
  } catch (error) {
    res.json(error);
  }
};

export const getTask: RequestHandler = async (req, res) => {
  try {
    const taskFound = await Task.findById(req.params.id);
    if (!taskFound) return res.status(204).json();
    return res.json(taskFound);
  } catch (error) {
    res.json(error);
  }
};

export const createTask: RequestHandler = async (req, res) => {
  try {
    const taskFound = await Task.findOne({ name: req.body.name });
    if (taskFound)
      return res.status(403).json({ message: "The task already exists" });

    const task = new Task(req.body);
    const savedTask = await task.save();
    console.log(task);
    res.json(savedTask);
  } catch (error) {
    res.json(error);
  }
};

export const updateTask: RequestHandler = async (req, res) => {
  try {
    const taskUpdated = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(taskUpdated);
  } catch (error) {
    res.json(error);
  }
};

export const deleteTask: RequestHandler = async (req, res) => {
  try {
    const taskFound = await Task.findByIdAndDelete(req.params.id);
    if (!taskFound) return res.status(204).json();
    return res.json(taskFound);
  } catch (error) {
    res.json(error);
  }
};
