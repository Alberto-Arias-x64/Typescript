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
        Rules_Add: (state,action) => {
            return state
        }
    }
})

const store = configureStore({
    reducer: {
        Active_app: Active_app.reducer,
        Rules: Rules.reducer
    }
})

export const { App_Update } = Active_app.actions
export const { Rules_Update } = Rules.actions
export default store