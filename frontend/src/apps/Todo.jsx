import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import axios from 'axios'

import { Todo_Update } from '../store'
import { Base_Dir } from '../app'

const Todo = () => {
    const Todo_Data = useSelector((state) => state.Todo.value)
    const dispatch = useDispatch()
    const [New_Todo, Set_New_Todo] = useState('')
    const [New_State, Set_New_State] = useState('Stored')

    const Handle_Button = async () => {
        const New_Data_Todo = {
            name: New_Todo,
            state: New_State
        }
        const { data } = await axios.post(Base_Dir + 'api/Todo', New_Data_Todo)
        dispatch(Todo_Update(data))
        Set_New_Todo('')
        Set_New_State('Stored')
    }
    const Handle_Delete = async ({ target }) => {
        const { data } = await axios.delete(Base_Dir + 'api/Todo', { data: { id: target.dataset.id } })
        dispatch(Todo_Update(data))
    }
    const Handle_Input_Todo = (({ target }) => {
        Set_New_Todo(target.value)
    })
    const Handle_Input_State = (({ target }) => {
        Set_New_State(target.value)
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

    const Print_Todo = () => {
        return Todo_Data.map(Todo => {
            return (
                <div className='card_yellow' key={Todo.id}>
                    <div className='card_grid'>
                        <p className='bold'>{Todo.name}</p>
                        <div className='context_menu' onClick={Handle_Hide}>
                            <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                            <div className='badge context_hide'>
                                {/* <p data-id={Rule.id}>Edit</p> */}
                                <p data-id={Todo.id} onClick={Handle_Delete}>Delete</p>
                            </div>
                        </div>
                    </div>

                    <p>{Todo.status}</p>
                    <p>{Todo.createdAt}</p>
                    <p>{Todo.updatedAt}</p>
                </div>
            )
        })
    }
    useEffect(() => {
        const update = async () => {
            const { data } = await axios.get(Base_Dir + 'api/todo')
            dispatch(Todo_Update(data))
        }
        update()
    }, []);
    return (
        <section>
            <h2>To Do</h2>
            <div id='todo'>
                <Print_Todo />
            </div>
            <div className='double_input'>
                <div className='dot_decorator'></div>
                <input type="text" placeholder='Title' value={New_Todo} onChange={Handle_Input_Todo} />
                <select value={New_State} onChange={Handle_Input_State}>
                    <option value="Ready">Ready</option>
                    <option value="In progress">In progress</option>
                    <option value="Stored">Stored</option>
                </select>
                <button onClick={Handle_Button}>Add</button>
            </div>
        </section>
    )
}

export default Todo