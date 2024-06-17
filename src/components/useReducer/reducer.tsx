import {useSelector} from "react-redux"
import { RootState } from "@/lib/store"
import ButtonGroup from "./component"

export default function UseReducer () {
    const count = useSelector((state : RootState) => state.count)

    return (
        <div>
            <h1>Reducer</h1>
            {count.value}
            <ButtonGroup />
        </div>
    )
}