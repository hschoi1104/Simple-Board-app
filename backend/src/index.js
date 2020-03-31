import 'babel-polyfill'
import initApp from './init'

import dotenv from 'dotenv'

dotenv.config()

const { PORT = 8080, DATABASE_URL } = process.env
initApp({
    PORT,
    DATABASE_URL,
})