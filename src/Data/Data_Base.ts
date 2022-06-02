import { To_Do_Structure } from '../Types'
import Data_Base from './DB.json'

const Tasks: To_Do_Structure[] = Data_Base as To_Do_Structure[]

export const Get_Tasks = (): To_Do_Structure[] => Tasks
export const Add_Task = (): null => null
