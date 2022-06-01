import { Router } from 'express'

const Modem = Router()

Modem.route('/')
    .get((_req, res) => res.send("I'm ready papus"))

export default Modem