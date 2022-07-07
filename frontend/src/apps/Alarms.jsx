import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import axios from 'axios'

import { Alarms_Update } from "../store"

const Alarms = () => {
    const Alarms_Data = useSelector((state) => state.Alarms.value)
    const dispatch = useDispatch()
    const [New_Alarm, Set_New_Alarm] = useState('')

    const Handle_Button = async () => {
        const { data } = await axios.post('http://127.0.0.1:3001/api/Alarms', { time: New_Alarm })
        dispatch(Alarms_Update(data))
        Set_New_Alarm('')
    }
    const Handle_Delete = async ({ target }) => {
        const { data } = await axios.delete('http://127.0.0.1:3001/api/Alarms', { data: { id: target.dataset.id } })
        dispatch(Alarms_Update(data))
    }
    const Handle_Input = (({ target }) => {
        Set_New_Alarm(target.value)
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

    const Print_Alarms = () => {
        return Alarms_Data.map(Alarm => {
            return (
                <div className='card_gray f_row' key={Alarm.id}>
                    <div className='dot_decorator'></div>
                    <p className=''>{Alarm.time}</p>
                    <div className='context_menu' onClick={Handle_Hide}>
                        <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                        <div className='badge context_hide'>
                            {/* <p data-id={Alarm.id}>Edit</p> */}
                            <p data-id={Alarm.id} onClick={Handle_Delete}>Delete</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    useEffect(() => {
        const update = async () => {
            const { data } = await axios.get('http://127.0.0.1:3001/api/Alarms')
            dispatch(Alarms_Update(data))
        }
        update()
    }, []);
    return (
        <section>
            <h2>Alarms</h2>
            <Print_Alarms />
            <div className='simple_input'>
                <div className='dot_decorator'></div>
                <input type="time" placeholder='Title' value={New_Alarm} onChange={Handle_Input} />
                <button onClick={Handle_Button}>Add</button>
            </div>
        </section>
    )
}
export default Alarms