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

const store = configureStore({
    reducer: {
        Active_app: Active_app.reducer,
        Alarms: Alarms.reducer,
        Daily: Daily.reducer,
        Rules: Rules.reducer,
        Reminder: Reminder.reducer
    }
})

export const { App_Update } = Active_app.actions
export const { Rules_Update } = Rules.actions
export const { Alarms_Update } = Alarms.actions
export const { Daily_Update } = Daily.actions
export const { Reminder_Update } = Reminder.actions
export default store