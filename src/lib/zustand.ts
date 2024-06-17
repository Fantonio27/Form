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
    count: 0,
    add : () => set((state) => ({count: state.count + 1})),
    negative: () => set((state) => ({count: state.count - 1})),
    number: (qty) => set(()=> ({count : qty}))
}))

export { CounterStore }