import express from 'express'
import morgan from 'morgan'
import path from 'path'
import 'dotenv/config'

import Router from './Routes/Router'
import Api_Router from './Routes/Api_Router'

const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname,'Public')))
app.use(morgan('tiny'))

app.use('/',Router)
app.use('/api',Api_Router)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Listen on port: ${PORT}`))