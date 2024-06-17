import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const CountEvent = createSlice({
    //Name of the state
    name: 'count',
    // Initial Value
    initialState: {
        value: 0
    },
    //Actions
    reducers:{
        add : (state) => {
            state.value += 1
        },
        minus: (state) => {
            state.value -= 1
        },
        setnumber: (state, action: PayloadAction<{value: number}>) => {
            state.value = action.payload.value
        }
    }
})

export const {add, minus, setnumber} = CountEvent.actions
export default CountEvent.reducer
