import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()

import 'express-async-errors'
import morgan from 'morgan'

import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'

import helmet from 'helmet'
import cors from 'cors'
import xss from 'xss-clean'
import mongoSanitize from 'express-mongo-sanitize'

// hello
// db and authenticateUser
import connectDB from './db/connect.js'

// routers
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'
import  aiRouter from './routes/ai.js'
import  ipnRouter from './routes/ipn.js'


// const aiRouter = require('./routes/ai');
//import jobsRouter from '../my-project/out'

// middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import authenticateUser from './middleware/auth.js'


if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

const __dirname = dirname(fileURLToPath(import.meta.url))

//only when ready to deploy
// only when ready to deploy
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
// })
//
//app.use(express.static(path.join(__dirname, '../my-project/out')))
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(xss())
app.use(mongoSanitize())

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)
app.use('/api/v1/ai', aiRouter);
app.use('api/v1/ipn', ipnRouter);




app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 80

const start = async () => {
  try {
   await connectDB(process.env.MONGO_URL)

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
