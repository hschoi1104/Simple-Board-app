import fs from 'fs'
import path from 'path'
import { Router } from 'express'

const router = Router()
const indexJs = path.basename(__filename)

fs.readdirSync(__dirname)
    .filter(
        file =>
        file.indexOf('.') !== 0 &&
        file !== indexJs &&
        file.slice(-9) === '.route.js'
    )
    .forEach(routeFile => {
        const subrouter = require(`./${routeFile}`).default
        const middlewares = []

        if (!subrouter || !subrouter.use) {
            const err = Error(`Invalid router file '${routeFile}'`)
            throw err
        }

        router.use(`/${routeFile.split('.')[0]}`, middlewares, subrouter)
    })

export default router