import express from 'express'
import morgan from 'morgan'

import Router from './Routes/Router'
import Api_Router from './Routes/Api_Router'
const app = express()

app.use(express.json())
app.use(morgan('tiny'))

app.use('/',Router)
app.use('/api',Api_Router)

const PORT = 3001

app.listen(PORT, () => console.log(`Listen on port: ${PORT}`))