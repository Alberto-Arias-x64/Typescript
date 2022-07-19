import { useDispatch, useSelector } from 'react-redux'
import { useState,useEffect } from 'react'

import { Pomodoro_Subtract, Pomodoro_Reset, Pomodoro_State } from '../store'

const Pomodoro = () => {
    const { minutes, seconds, clock_state } = useSelector((state) => state.Pomodoro)
    const dispatch = useDispatch()
    const [Interval, Set_Interval] = useState()

    const Play = () => {
        dispatch(Pomodoro_State())
        if (clock_state !== true) {
            Set_Interval(setInterval(() => {
                dispatch(Pomodoro_Subtract())
            }, 1000)) 
        }
        else {
            clearInterval(Interval)
            Set_Interval(null)
        }
    }
    useEffect(() => {
        const Clock = document.querySelector('#clock_data_decorator')
        Clock.style.strokeDashoffset = 440 - (440 * minutes) / 30
    }, [minutes]);
    return (
        < section >
            <h2>Pomodoro</h2>
            {/* <div className="spinner"></div> */}
            <div className='clock'>
                <svg className='clock_decorator'>
                    <circle cx={70} cy={70} r={70}>
                    </circle>
                </svg>
                <svg className='clock_decorator' id='clock_data_decorator'>
                    <circle cx={70} cy={70} r={70}>
                    </circle>
                </svg>
                <div className="f_row clock_data">
                    <p>{minutes}</p>
                    <p>:</p>
                    <p>{seconds.toString().length === 1 ? `0${seconds}` : seconds}</p>
                </div>
            </div>
            <button className='rounded' onClick={Play} >{clock_state !== true ? <ion-icon name="play-outline"></ion-icon> : <ion-icon name="pause-outline"></ion-icon>}</button>
        </section >
    )
}
export default Pomodoro