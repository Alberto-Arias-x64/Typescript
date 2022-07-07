import { Router } from 'express'
import { Add as Rules_Add, Read as Rules_Read, Delete as Rules_Delete } from '../Controller/Rules'
import { Add as Alarms_Add, Read as Alarms_Read, Delete as Alarms_Delete } from '../Controller/Alarms'

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

export default Modem
