import { useRef } from "react";

export default function UseRef () {
    const firstName = useRef<HTMLInputElement>(null);
    const LastName = useRef<HTMLInputElement>(null);
    const textarea = useRef(null);


    function Display(){
        // console.log(firstName.current++)

        const val = firstName.current?.value
        console.log(val, LastName.current?.value)
    }

    // console.log("csacascsa")
    return (
        <>
            <h1 className="font-bold text-2xl mb-10">UseRef</h1>
            <div>
                <input className="border border-slate-300 px-3" type="text" placeholder="FirstName" ref={firstName}/>
                <input className="border border-slate-300 px-3" type="text" placeholder="LastName" ref={LastName}/>
                <textarea id="H1" className="border border-slate-300 px-3" name="tara" ref={textarea} value="dahan dahancsca"></textarea>
            </div>

            <button className="border border-slate-300 px-3 bg-red-300 mt-5" onClick={Display}>Submit</button>
        </>
    )
}