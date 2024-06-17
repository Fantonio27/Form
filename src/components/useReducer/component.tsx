import {add, minus, setnumber} from "@/features/counter/counterSlice"
import { useDispatch } from "react-redux"

export default function Component () {
    const dispatch = useDispatch()

    return (
        <div className=" space-x-5 bg-red-300 w-max p-5">
            <button onClick={() => dispatch(add())} className="bg-red-500 p-2">+</button>
            <button onClick={() => dispatch(minus())} className="bg-red-500 p-2">-</button>
            <button onClick={() => dispatch(setnumber({value: 5}))} className="bg-red-500 p-2">Set to 2</button>
        </div>
    )
}