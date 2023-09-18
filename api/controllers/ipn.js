import Job from "../models/Job.js";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from "../errors/index.js";
import checkPermissions from "../utils/checkPermissions.js";
import mongoose from "mongoose";
import moment from "moment";
const createJob = async (req, res) => {
  console.log(req.body);
};

const getAllProducts = async (req, res) => {
  console.log(req.body);
};

const getAllJobs = async (req, res) => {
  console.log(req.body);
};

export { createJob, getAllJobs, getAllProducts };
