import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "@/features/counter/counterSlice";

export const store = configureStore({
    reducer: {
        count: CounterSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDiscpatch = typeof store.dispatch