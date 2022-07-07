import express from 'express'
import morgan from 'morgan'
import path from 'path'
import cors from 'cors'
import 'dotenv/config'
import 'colors'

import Router from './Routes/Router'
import Api_Router from './Routes/Api_Router'
import { sequelize } from './Data/Data_Base'

const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, 'Public')))
app.use(morgan('dev'))
app.use(cors())

app.use('/', Router)
app.use('/api', Api_Router)

const PORT = process.env.PORT || 3001
sequelize.sync({ alter: true })

app.listen(PORT, () => console.log(`Listen on port: ` + `${PORT}`.blue))