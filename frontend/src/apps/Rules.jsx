import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import axios from 'axios'

import { Rules_Update } from "../store"

const Rules = () => {
    const Rules_Data = useSelector((state) => state.Rules.value)
    const dispatch = useDispatch()
    const [New_Rule,Set_New_Rule] = useState('')

    const Handle_Button = async () => {
        const { data } = await axios.get('http://127.0.0.1:3001/api/rules')
        dispatch(Rules_Update(data))
        Set_New_Rule('')
    }
    const Handle_Input = (({target}) => {
        Set_New_Rule(target.value)
    })

    const Print_Rules = () => {
        return Rules_Data.map(Rule =>{
            return(
                <div className='Rule' key={Rule.id} data-id={Rule.id}>
                    <p>{Rule.name}</p>
                </div>
            )
        })
    }  
    useEffect(() => {
        
    }, []);
    return (
        <section>
            <h2>Rules</h2>
            <input type="text" placeholder='Title' value={New_Rule} onChange={Handle_Input}/>
            <Print_Rules/>
            <button onClick={Handle_Button}>Create</button>
        </section>
    )
}
export default Rules