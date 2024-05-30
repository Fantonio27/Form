
import { useReducer, useRef } from "react"

type State = {
    age: number,
    name: string
}
function reducer(state : State, action : {type: string, value: string}){
    switch(action.type){
        case 'increment': {
            return {
                name: state.name,
                age: state.age + 1
            }
        }

        case 'decrement': {
            return {
                name: state.name,
                age: state.age - 1
            }
        }
        case 'multiply': {
            return {
                  name: state.name,
                age: state.age * 2  
            }
        }
        case 'divide': {
            return {
                  name: state.name,
                age: state.age / state.age
            }
        }

        case 'ChangeName': {
            return {
                age: state.age,
                name: action.value
            }
        }
    }
}

export default function UseReducer () {
    const initial = {age: 42, name: ""}
    const [state, dispatch] = useReducer(reducer, initial)

    const Name = useRef<HTMLInputElement>(null)

    const handleAdd = () => {
        const n = Name.current?.value
        dispatch({type: 'ChangeName', value: n})
    }
    return (
        <>
            <h1 className="font-bold text-2xl mb-10">UseReducer</h1>
            
            <input type="text" className="border border-slate-300" placeholder="Name" ref={Name}/>
            <p>Number: {state.age}</p>
            <p>Name: {state.name}</p>
            <div className="space-x-5">
                <button className="bg-sky-300 px-3" onClick={()=> dispatch({type: 'increment'})}>increment</button>
                <button className="bg-red-300 px-3" onClick={()=> dispatch({type: 'decrement'})}>decrement</button>
                <button className="bg-green-300 px-3" onClick={()=> dispatch({type: 'multiply'})}>multiply</button>
                <button className="bg-orange-300 px-3" onClick={()=> dispatch({type: 'divide'})}>divide</button>
                <button className="bg-yellow-300 px-3" onClick={handleAdd}>changeName</button>
            </div>
          
        </>
    )
}