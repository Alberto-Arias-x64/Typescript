import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

const Active_app = createSlice({
    name: 'Active_app',
    initialState:{
        value:'Daily'
    },
    reducers: {
        update: (state, action) => {
            state.value = action.payload
        }
    }
})

const store = configureStore({
    reducer: {
        Active_app: Active_app.reducer
    }
})

export const { update } = Active_app.actions
export default store