import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

const Active_app = createSlice({
    name: 'Active_app',
    initialState: {
        value: 'Daily'
    },
    reducers: {
        App_Update: (state, action) => {
            state.value = action.payload
        }
    }
})

const Rules = createSlice({
    name: 'Rules',
    initialState: {
        value: []
    },
    reducers: {
        Rules_Update: (state, action) => {
            state.value = action.payload
        },
    }
})

const Alarms = createSlice({
    name: 'Alarms',
    initialState: {
        value: []
    },
    reducers: {
        Alarms_Update: (state, action) => {
            state.value = action.payload
        },
    }
})

const Reminder = createSlice({
    name: 'Reminder',
    initialState: {
        value: []
    },
    reducers: {
        Reminder_Update: (state, action) => {
            state.value = action.payload
        },
    }
})

const Daily = createSlice({
    name: 'Daily',
    initialState: {
        value: []
    },
    reducers: {
        Daily_Update: (state, action) => {
            state.value = action.payload
        },
    }
})

const Todo = createSlice({
    name: 'Todo',
    initialState: {
        value: []
    },
    reducers: {
        Todo_Update: (state, action) => {
            state.value = action.payload
        },
    }
})

const Pomodoro = createSlice({
    name: 'Pomodoro',
    initialState: {
        minutes: 30,
        seconds: 0,
        clock_state: false
    },
    reducers: {
        Pomodoro_Add: (state) => {
            state.minutes += 1
        },
        Pomodoro_Subtract: (state) => {
            if(state.seconds === 0){
                state.minutes -=1
                state.seconds = 59
            }
            else{
                state.seconds -= 1
            }
        },
        Pomodoro_Reset: (state) => {
            state.minutes = 30
            state.seconds = 0
            state.clock_state = false
        },
        Pomodoro_State: (state) => {
            state.clock_state = !state.clock_state
        },
    }
})

const store = configureStore({
    reducer: {
        Active_app: Active_app.reducer,
        Alarms: Alarms.reducer,
        Daily: Daily.reducer,
        Rules: Rules.reducer,
        Reminder: Reminder.reducer,
        Pomodoro: Pomodoro.reducer,
        Todo: Todo.reducer
    }
})

export const { App_Update } = Active_app.actions
export const { Rules_Update } = Rules.actions
export const { Alarms_Update } = Alarms.actions
export const { Daily_Update } = Daily.actions
export const { Reminder_Update } = Reminder.actions
export const { Todo_Update } = Todo.actions
export const { Pomodoro_Add, Pomodoro_Reset, Pomodoro_State, Pomodoro_Subtract } = Pomodoro.actions
export default store