import React, { useRef } from "react";

function RefUncontrolled() {

  const fullname = useRef<HTMLInputElement>(null)
  const email = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)
  const age = useRef<HTMLInputElement>(null)

  const OnSubmit = (event : React.FormEvent<HTMLInputElement>) =>{
      event.preventDefault();
      const data = {
        fullname: fullname.current?.value,
        email: email.current?.value,
        password: password.current?.value,
        age: age.current?.value,
      } 
      console.log(data)
  }


  return (
    <div className="flex justify-center items-center mt-28">
      <form className="border border-slate-300 rounded-xl p-10">
        <h1 className=" font-bold text-2xl mb-10">UnControlled (using ref)</h1>
        <div className="grid grid-cols-2 gap-y-5">
          <>
            <label htmlFor="fullname">Fullname</label>
            <input name="fullname" type="text" placeholder='Fullname' className="border border-slate-400 rounded-sm indent-1" ref={fullname}/>
          </>
          <>
            <label htmlFor="email">Email</label>
            <input name="email" type="email" placeholder='Email' className="border border-slate-400 rounded-sm indent-1" ref={email}/>
          </>
          <>
            <label htmlFor="password">Password</label>
            <input name="password" type="password" placeholder='Password' className="border border-slate-400 rounded-sm indent-1" ref={password}/>
          </>
          <>
            <label htmlFor="age">Age</label>
            <input name="age" type="number" placeholder='Age' className="border border-slate-400 rounded-sm indent-1" ref={age}/>
          </>
        </div>
    
        <input type="submit" className=" bg-green-600 w-full py-2 rounded-full text-white mt-7 " onClick={OnSubmit}/>
      </form>

    </div>
  );
}

export default RefUncontrolled;
