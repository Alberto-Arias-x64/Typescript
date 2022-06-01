import { To_Do_Structure } from '../Types'
import Data_Base from './DB.json'

const Tasks: Array<To_Do_Structure> = Data_Base as Array<To_Do_Structure>

export const Get_Tasks = () => Tasks
export const Add_Task = () => null