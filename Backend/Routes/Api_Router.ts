import { Router } from 'express'
import { Add as Rules_Add, Read as Rules_Read, Delete as Rules_Delete } from '../Controller/Rules'
import { Add as Alarms_Add, Read as Alarms_Read, Delete as Alarms_Delete } from '../Controller/Alarms'
import { Add as Daily_Add, Read as Daily_Read, Delete as Daily_Delete } from '../Controller/Daily'
import { Add as Reminder_Add, Read as Reminder_Read, Delete as Reminder_Delete } from '../Controller/Reminder'
import { Add as Todo_Add, Read as Todo_Read, Delete as Todo_Delete } from '../Controller/Todo'

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

Modem.route('/reminder')
    .get(Reminder_Read)
    .post(Reminder_Add)
    .delete(Reminder_Delete)

Modem.route('/todo')
    .get(Todo_Read)
    .post(Todo_Add)
    .delete(Todo_Delete)

export default Modem
