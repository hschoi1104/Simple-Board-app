import express from 'express'
import path from 'path'
import logger from 'morgan'
import bodyParser from 'body-parser'
import history from 'connect-history-api-fallback'

import APIS from './api'

const app = express()

app.use(
    logger('dev', {
        skip: () => app.get('env') === 'test',
    })
)
app.use(bodyParser.json({ limit: '11mb' }))
app.use(
    bodyParser.urlencoded({
        extended: false,
        limit: '10mb',
    })
)
app.use('/api', APIS)

app.use('/api/*', (req, res, next) => {
    const err = new Error('올바르지 않은 API 접근입니다.')
    err.status = 404
    next(err)
})

app.use(history({}))
app.use(express.static(path.join(__dirname, '../public')))

// Catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})

// Error handler
app.use((err, req, res, next) => {
    // eslint-disable-line no-unused-vars
    res.status(err.status || 500).json({
        message: err.message,
    })
})

export default app