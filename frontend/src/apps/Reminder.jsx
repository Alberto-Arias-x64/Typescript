import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import axios from 'axios'

import { Reminder_Update } from '../store'
import { Base_Dir } from '../app'

const Reminder = () => {
    const Reminder_Data = useSelector((state) => state.Reminder.value)
    const dispatch = useDispatch()
    const [New_Reminder, Set_New_Reminder] = useState('')
    const [New_Date, Set_New_Date] = useState('')
    const [New_Time, Set_New_Time] = useState('')

    const Handle_Button = async () => {
        const New_Data_Reminder = {
            name: New_Reminder,
            date: New_Date,
            time: New_Time
        }
        const { data } = await axios.post(Base_Dir+'api/reminder', New_Data_Reminder)
        dispatch(Reminder_Update(data))
        Set_New_Reminder('')
        Set_New_Date('')
        Set_New_Time('')
    }
    const Handle_Delete = async ({ target }) => {
        const { data } = await axios.delete(Base_Dir+'api/reminder', { data: { id: target.dataset.id } })
        dispatch(Reminder_Update(data))
    }
    const Handle_Input_Reminder = (({ target }) => {
        Set_New_Reminder(target.value)
    })
    const Handle_Input_Date = (({ target }) => {
        Set_New_Date(target.value)
    })
    const Handle_Input_Time = (({ target }) => {
        Set_New_Time(target.value)
    })
    const Handle_Hide = (({ target }) => {
        const parent = target.parentNode
        const menu = parent.querySelector('.badge')
        const list = menu.classList
        if (list[1] === 'context_hide') {
            menu.classList.remove('context_hide')
            menu.classList.add('context_show')
        }
        else {
            menu.classList.remove('context_show')
            menu.classList.add('context_hide')
        }
    })

    const Print_Reminder = () => {
        return Reminder_Data.map(Day => {
            return (
                <div className='card_gray f_row' key={Day.id}>
                    <div className='dot_decorator'></div>
                    <p className=''>{Day.name}</p>
                    <div className='f_row'>
                        <div className='badge g_row'>
                            <p>{Day.date}</p>
                            <p> | </p>
                            <p>{Day.time}</p>
                        </div>
                        <div className='context_menu' onClick={Handle_Hide}>
                            <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                            <div className='badge context_hide'>
                                {/* <p data-id={Day.id}>Edit</p> */}
                                <p data-id={Day.id} onClick={Handle_Delete}>Delete</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }
    useEffect(() => {
        const update = async () => {
            const { data } = await axios.get(Base_Dir+'api/reminder')
            dispatch(Reminder_Update(data))
        }
        update()
    }, []);
    return (
        <section>
            <h2>Reminder</h2>
            <Print_Reminder />
            <div className='extended_input'>
                <div className='dot_decorator'></div>
                <input type="text" placeholder='Title' value={New_Reminder} onChange={Handle_Input_Reminder} />
                <div className='standard_gap'>
                    <input type="date" value={New_Date} onChange={Handle_Input_Date}/>
                    <input type="time" value={New_Time} onChange={Handle_Input_Time} />
                </div>
                <button onClick={Handle_Button}>Add</button>
            </div>
        </section>
    )
}
export default Reminder