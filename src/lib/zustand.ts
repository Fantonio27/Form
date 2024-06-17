import { create } from 'zustand'

type State = {
    count: number
}

type Action = {
    add: () => void,
    negative: () => void,
    number: (qty: number) => void
}

const CounterStore = create<State & Action>((set)=> ({
    // Initial Value
    count: 0,   

    // Actions
    add : () => set((state) => ({count: state.count + 1})),
    negative: () => set((state) => ({count: state.count - 1})),
    number: (qty) => set(()=> ({count : qty}))
}))


//Export
export { CounterStore }