import { Router } from 'express'
import { Add as Rules_Add, Read as Rules_Read, Delete as Rules_Delete } from '../Controller/Rules'
import { Add as Alarms_Add, Read as Alarms_Read, Delete as Alarms_Delete } from '../Controller/Alarms'
import { Add as Daily_Add, Read as Daily_Read, Delete as Daily_Delete } from '../Controller/Daily'

const Modem = Router()

Modem.route('/')
    .get((_req, res) => res.send(`I'm ready papus`))

Modem.route('/rules')
    .get(Rules_Read)
    .post(Rules_Add)
    .delete(Rules_Delete)

Modem.route('/alarms')
    .get(Alarms_Read)
    .post(Alarms_Add)
    .delete(Alarms_Delete)

Modem.route('/daily')
    .get(Daily_Read)
    .post(Daily_Add)
    .delete(Daily_Delete)

export default Modem
