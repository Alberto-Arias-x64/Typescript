import { Router } from 'express'
import { Add as Rules_Add, Read  as Rules_Read, Delete as Rules_Delete} from '../Controller/Rules'

const Modem = Router()

Modem.route('/')
    .get((_req, res) => res.send(`I'm ready papus`))

Modem.route('/rules')
    .get(Rules_Read)
    .post(Rules_Add)
    .delete(Rules_Delete)

export default Modem
