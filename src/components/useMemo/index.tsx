import { useMemo, useState } from "react"

export default function UseMemo (){

    const [firstName, setFirstName] = useState<string>("")
    const [data, setData] = useState<number[]>([0,1,2,3,4])

    // const withourmemo = () => {
    //     console.log("rendered")
    //     return data.map((number, index)=>{ return <li key={index}>{number}</li>})
    // }

    const withmemo = useMemo(() => {
        console.log("rendered")
        return data.map((number, index)=>{ return <li key={index}>{number}</li>})
    }, [data])
    return (
        <>
            <h1 className="font-bold text-2xl mb-10">Use Memo</h1>
            <div>
                <label htmlFor="">FirstName</label>
                <input type="text" value={firstName} onChange={(e)=> setFirstName(e.target.value)} className="border border-slate-300 ml-5"/>
            </div>

            <p className="text-sky-500">Name: {firstName}</p>

            <div>
                List:
                {
                    withmemo
                    // withourmemo()
                }
            </div>

            <button onClick={()=> setData(prev => [...prev, prev.length + 1])}>Click Me</button>
        </>
    )
}