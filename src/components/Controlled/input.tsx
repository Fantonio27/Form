import { useState } from "react";
import React from "react";

function ControlledInput() {
  const [dataform, setDataform] = useState({
    fullname: "",
    email: "",
    password: "",
    age: "",
  })

  const [display, setDisplay] = useState(false)

  const handleChange = (e : React.FormEvent<HTMLInputElement>) => {
    const {name , value} = e.currentTarget

    setDataform(prev => ({
      ...prev,
      [name] : value
    }))
  }

  const OnSubmit = (event : React.FormEvent<HTMLInputElement>) =>{
      event.preventDefault(); 
      setDisplay(true)
  }


  return (
    <div className="flex justify-center items-center mt-28">
      <form className="border border-slate-300 rounded-xl p-10">
        <h1 className=" font-bold text-2xl mb-10">Controlled (using usestate)</h1>
        <div className="grid grid-cols-2 gap-y-5">
          <>
            <label htmlFor="fullname">Fullname</label>
            <input name="fullname" type="text" placeholder='Fullname' className="border border-slate-400 rounded-sm indent-1" onChange={handleChange}/>
          </>
          <>
            <label htmlFor="email">Email</label>
            <input name="email" type="email" placeholder='Email' className="border border-slate-400 rounded-sm indent-1" onChange={handleChange}/>
          </>
          <>
            <label htmlFor="password">Password</label>
            <input name="password" type="password" placeholder='Password' className="border border-slate-400 rounded-sm indent-1" onChange={handleChange}/>
          </>
          <>
            <label htmlFor="age">Age</label>
            <input name="age" type="number" placeholder='Age' className="border border-slate-400 rounded-sm indent-1" onChange={handleChange}/>
          </>
        </div>
    
        <input type="submit" className=" bg-green-600 w-full py-2 rounded-full text-white mt-7 " onClick={OnSubmit}/>
      </form>

      {
        display && 
        <div className="bg-red-300">
        <ul>
          <li>Fullname: {dataform.fullname}</li>
          <li>Email: {dataform.email}</li>
          <li>Password: {dataform.password}</li>
          <li>Age: {dataform.age}</li>
        </ul>
      </div>
      }
     
    </div>
  );
}

export default ControlledInput;
