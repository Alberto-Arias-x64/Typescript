import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import axios from 'axios'

import { Rules_Update } from "../store"
import { Base_Dir } from '../app'

const Rules = () => {
    const Rules_Data = useSelector((state) => state.Rules.value)
    const dispatch = useDispatch()
    const [New_Rule, Set_New_Rule] = useState('')

    const Handle_Button = async () => {
        const { data } = await axios.post(Base_Dir+'api/rules', { name: New_Rule })
        dispatch(Rules_Update(data))
        Set_New_Rule('')
    }
    const Handle_Delete = async ({ target }) => {
        const { data } = await axios.delete(Base_Dir+'api/rules', { data: { id: target.dataset.id } })
        dispatch(Rules_Update(data))
    }
    const Handle_Input = (({ target }) => {
        Set_New_Rule(target.value)
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

    const Print_Rules = () => {
        return Rules_Data.map(Rule => {
            return (
                <div className='card_gray f_row' key={Rule.id}>
                    <div className='dot_decorator'></div>
                    <p className=''>{Rule.name}</p>
                    <div className='context_menu' onClick={Handle_Hide}>
                        <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                        <div className='badge context_hide'>
                            {/* <p data-id={Rule.id}>Edit</p> */}
                            <p data-id={Rule.id} onClick={Handle_Delete}>Delete</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    useEffect(() => {
        const update = async () => {
            const { data } = await axios.get(Base_Dir+'api/rules')
            dispatch(Rules_Update(data))
        }
        update()
    }, []);
    return (
        <section>
            <h2>Rules</h2>
            <Print_Rules />
            <div className='simple_input'>
                <div className='dot_decorator'></div>
                <input type="text" placeholder='Title' value={New_Rule} onChange={Handle_Input} />
                <button onClick={Handle_Button}>Add</button>
            </div>
        </section>
    )
}
export default Rules