import { useDispatch } from 'react-redux'
import { App_Update } from '../store'

const Side_Panel = ({ show = false , update_state}) => {
    const dispatch = useDispatch()

    const Handle_click = ({target}) => {
        dispatch(App_Update(target.dataset.name))
        update_state(false)
    }

    return (
        <div id="side_panel" className={show ? 'panel_show' : 'panel_hide'}>
            <p className='underline_decorator' data-name='Daily' onClick={Handle_click} ><ion-icon data-name='Daily' name="today-outline"></ion-icon> Daily</p>
            <p className='underline_decorator' data-name='Rules' onClick={Handle_click} ><ion-icon data-name='Rules' name="compass-outline"></ion-icon> Rules</p>
            <p className='underline_decorator' data-name='Todo' onClick={Handle_click} ><ion-icon data-name='Todo' name="create-outline"></ion-icon> Todo</p>
            <p className='underline_decorator' data-name='Pomodoro' onClick={Handle_click} ><ion-icon data-name='Pomodoro' name="timer-outline"></ion-icon> Pomodoro</p>
            <p className='underline_decorator' data-name='Alarms' onClick={Handle_click} ><ion-icon data-name='Alarms' name="alarm-outline"></ion-icon> Alarms</p>
            <p className='underline_decorator' data-name='Reminder' onClick={Handle_click} ><ion-icon data-name='Reminder' name="bookmark-outline"></ion-icon> Reminder</p>

            <p className='note'>Develop release 0.1.0</p>
        </div>
    )
}
export default Side_Panel