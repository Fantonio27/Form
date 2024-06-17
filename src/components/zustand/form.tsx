import { CounterStore } from "@/lib/zustand"
import ButtonGroup from "./component"

export default function zustand () {
    const { count} = CounterStore((state) => state)
    
    return (
        <div>
            <h1>Zustand Component</h1>
            <p>Count: {count}</p>
            <ButtonGroup />
        </div>
    )
}