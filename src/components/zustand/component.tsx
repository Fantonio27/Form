import { CounterStore } from "@/lib/zustand"

export default function Component () {
    const {add, negative, number} = CounterStore((state)=> state)
    return (
        <div className=" space-x-5 bg-red-300 w-max p-5">
            <button onClick={add} className="bg-red-500 p-2">+</button>
            <button onClick={negative} className="bg-red-500 p-2">-</button>
            <button onClick={()=> number(2)} className="bg-red-500 p-2">Set to 2</button>
        </div>
    )
}