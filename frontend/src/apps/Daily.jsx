import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import axios from 'axios'

import { Daily_Update } from '../store'
import { Base_Dir } from '../app'

const Daily = () => {
    const Daily_Data = useSelector((state) => state.Daily.value)
    const dispatch = useDispatch()
    const [New_Name, Set_New_Name] = useState('')
    const [New_Start, Set_New_Start] = useState('')
    const [New_End, Set_New_End] = useState('')

    const Handle_Button = async () => {
        const New_Data_Daily = {
            name: New_Name,
            start: New_Start,
            end: New_End
        }
        const { data } = await axios.post(Base_Dir+'api/daily', New_Data_Daily)
        dispatch(Daily_Update(data))
        Set_New_Name('')
        Set_New_Start('')
        Set_New_End('')
    }
    const Handle_Delete = async ({ target }) => {
        const { data } = await axios.delete(Base_Dir+'api/daily', { data: { id: target.dataset.id } })
        dispatch(Daily_Update(data))
    }
    const Handle_Input_Name = (({ target }) => {
        Set_New_Name(target.value)
    })
    const Handle_Input_Start = (({ target }) => {
        Set_New_Start(target.value)
    })
    const Handle_Input_End = (({ target }) => {
        Set_New_End(target.value)
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

    const Print_Daily = () => {
        return Daily_Data.map(Day => {
            return (
                <div className='card_gray f_row' key={Day.id}>
                    <div className='dot_decorator'></div>
                    <p className=''>{Day.name}</p>
                    <div className='f_row'>
                        <div className='badge g_row'>
                            <p>{Day.time_init}</p>
                            <p> | </p>
                            <p>{Day.time_end}</p>
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
            const { data } = await axios.get(Base_Dir+'api/daily')
            dispatch(Daily_Update(data))
        }
        update()
    }, []);
    return (
        <section>
            <h2>Daily Routine</h2>
            <Print_Daily />
            <div className='extended_input'>
                <div className='dot_decorator'></div>
                <input type="text" placeholder='Title' value={New_Name} onChange={Handle_Input_Name} />
                <div className='standard_gap'>
                    <input type="time" value={New_Start} onChange={Handle_Input_Start} />
                    <input type="time" value={New_End} onChange={Handle_Input_End} />
                </div>
                <button onClick={Handle_Button}>Add</button>
            </div>
        </section>
    )
}
export default Daily