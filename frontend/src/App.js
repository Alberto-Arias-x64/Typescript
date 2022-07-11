import { useState } from 'react'
import { useSelector } from 'react-redux'

import Daily from './apps/Daily'
import Rules from './apps/Rules'
import Todo from './apps/Todo'
import Pomodoro from './apps/Pomodoro'
import Alarms from './apps/Alarms'
import Reminder from './apps/Reminder'

import Side_Panel from './components/Side_Panel'

const Base_Dir = 'http://192.168.31.236:3001/'
const App = () => {
    const [side_show, set_side] = useState(false)
    const app = useSelector((state) => state.Active_app.value)
    return (
        <>
            <header>
                <div className="icon" onClick={() => set_side(!side_show)}><ion-icon name="apps-outline"></ion-icon></div>
                <h1>Time Manager</h1>
                <Side_Panel show={side_show} update_state={set_side}/>
            </header>
            <main>
                {app === 'Daily' && <Daily/>}
                {app === 'Rules' && <Rules/>}
                {app === 'Todo' && <Todo/>}
                {app === 'Pomodoro' && <Pomodoro/>}
                {app === 'Alarms' && <Alarms/>}
                {app === 'Reminder' && <Reminder/>}
            </main>
        </>
    )
}

export default App
export {Base_Dir}