import dotenv from 'dotenv'

dotenv.config()

const Config = {
  app: {
    port: process.env.APP_PORT || 3001
  },
  mongo: {
    url: process.env.MONGO_URL,
    db: process.env.MONGO_DB
  }
}

export default Config