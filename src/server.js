import express, { json } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './routes'
import { responseMiddleware } from './middlewares/response.middleware'
import Config from './config'

// mongodb+srv://manvir:iFI7tQ0cR4X1CPR1@appwrk-db.89jgk.mongodb.net/appwrk-db?retryWrites=true&w=majority

mongoose.connect(`${Config.mongo.url}/${Config.mongo.db}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}, err => {
  if (!err)
    console.log('Mongodb Connected.')
});

const app = express()

app.use(cors())
app.use(express.json())
app.use(responseMiddleware)
app.use('/api', routes)

const port = Config.app.port

app.listen(port, () => {
  console.log(`App is Running on Port: ${port}`)
})