import { useDispatch } from 'react-redux'
import { update } from '../store'

const Side_panel = ({ show = false , update_state}) => {
    const dispatch = useDispatch()

    const Handle_click = ({target}) => {
        dispatch(update(target.innerHTML))
        update_state(false)
    }

    return (
        <div id="Side_panel" className={show ? 'show' : 'hide'}>
            <p onClick={Handle_click} >Daily</p>
            <p onClick={Handle_click} >Rules</p>
            <p onClick={Handle_click} >Todo</p>
            <p onClick={Handle_click} >Pomodoro</p>
            <p onClick={Handle_click} >Alarms</p>
            <p onClick={Handle_click} >Reminder</p>

            <p>Develop release 0.1.0</p>
        </div>
    )
}
export default Side_panel