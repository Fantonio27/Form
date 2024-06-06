
// import {useRef } from "react"

// // type State = {
// //     age: number,
// //     name: string,
// //     birthdate: string,
// // }
// // function reducer(state : State, action : {type: string, value: string}){
// //     switch(action.type){
// //         case 'increment': {
// //             return {
// //                 ...state,
// //                 age: state.age + 1
// //             }
// //         }

// //         case 'decrement': {
// //             return {
// //                ...state,
// //                 age: state.age - 1
// //             }
// //         }
// //         case 'multiply': {
// //             return {
// //                  ...state,
// //                 age: state.age * 2  
// //             }
// //         }
// //         case 'divide': {
// //             return {
// //                  ...state,
// //                 age: state.age / state.age
// //             }
// //         }

// //         case 'ChangeName': {
// //             return {
// //                ...state,
// //                 name: action.value
// //             }
// //         }

// //         case 'ChangeDate': {
// //             return {
// //                 ...state,
// //                birthdate: "09/28/2002",
// //             }
// //         }
// //     }
// // }

// export default function UseReducer () {
//     // const initial = {age: 42, name: "", birthdate: "09/27/2002"}
//     // const [state, dispatch] = useReducer(reducer, initial)

//     const Name = useRef<HTMLInputElement>(null)

//     // const handleAdd = () => {
//     //     const n = Name.current?.value
//     //     dispatch({type: 'ChangeName', value: n})
//     // }
//     return (
//         <>
//             <h1 className="font-bold text-2xl mb-10">UseReducer</h1>
            
//             <input type="text" className="border border-slate-300" placeholder="Name" ref={Name}/>
//             {/* <p>Number: {state.age}</p>
//             <p>Name: {state.name}</p>
//             <p>Birthdate: {state.birthdate}</p> */}
//             <div className="space-x-5">
//                 {/* <button className="bg-sky-300 px-3" onClick={()=> dispatch({type: 'increment'})}>increment</button>
//                 <button className="bg-red-300 px-3" onClick={()=> dispatch({type: 'decrement'})}>decrement</button>
//                 <button className="bg-green-300 px-3" onClick={()=> dispatch({type: 'multiply'})}>multiply</button>
//                 <button className="bg-orange-300 px-3" onClick={()=> dispatch({type: 'divide'})}>divide</button>
//                 <button className="bg-yellow-300 px-3" onClick={handleAdd}>changeName</button>
//                 <button className="bg-yellow-300 px-3" onClick={()=> dispatch({type: 'ChangeDate'})}>ChangeDate</button> */}
//             </div>
          
//         </>
//     )
// }

export default function UseReducer () {
    return <h1>Reducer</h1>
}