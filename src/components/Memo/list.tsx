import { type Name } from "."
import {memo, useState} from "react"

const ListItems = memo(function ListItems({ lists, onDelete} : {lists: Name[], onDelete: ()=> void}) {
    console.log("List")
    const [count, setCount] = useState(0)
    return (
        <div className="bg-red-200 mt-5">
            <h1>List of all the Players</h1>
            <ul>
                {lists.map((list, index)=> {
                    return (<li key={index}>- {list.firstName} {list.lastName}</li>)
                })}
            </ul>

            <button className="border border-slate-200 px-5 bg-sky-400" onClick={()=> setCount(prev => prev + 1)}>Count {count}</button>
            <button className="border border-slate-200 px-5 bg-red-300" onClick={onDelete}>Delete</button>

        </div>
    )
})

export default ListItems