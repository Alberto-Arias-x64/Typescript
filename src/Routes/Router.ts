import { Router } from 'express'

const Modem = Router()

Modem.route('/')
    .get((_req, res) => res.redirect('./index.html'))

export default Modem