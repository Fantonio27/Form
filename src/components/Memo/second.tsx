import { memo } from "react";

const Second = memo(function Second({name} : {name: string}){
    console.log("Second")
    return (
        <h1>Hello {name}</h1>
    )
})

export default Second;