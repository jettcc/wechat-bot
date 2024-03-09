
import { Redis } from 'ioredis'
import dotenv from 'dotenv'

const env = dotenv.config().parsed // 环境参数

const redis = new Redis({
  host: env.REDIS_HOST,
  port: env.REDIS_PORT,
  password:env.REDIS_PASSWORD,
  db: env.REDIS_DB
})

export default redis