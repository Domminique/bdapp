import express from 'express'
const router = express.Router()

import {
  createJob,
  getAllJobs,

} from '../controllers/ipn.js'

router
.route('/')
.post(createJob)
.get(getAllJobs)

export default router
