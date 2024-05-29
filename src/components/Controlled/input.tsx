function ControlledInput() {

  return (
    <div className="flex justify-center items-center mt-28">
      <form className="border border-slate-300 rounded-xl p-10">
        <h1 className=" font-bold text-2xl mb-10">Controlled (using usestate)</h1>
        <div className="grid grid-cols-2 gap-y-5">
          <>
            <label htmlFor="fullname">Fullname</label>
            <input id="fullname" type="text" placeholder='Fullname' className="border border-slate-400 rounded-sm indent-1"/>
          </>
          <>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder='Email' className="border border-slate-400 rounded-sm indent-1"/>
          </>
          <>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder='Password' className="border border-slate-400 rounded-sm indent-1"/>
          </>
          <>
            <label htmlFor="age">Age</label>
            <input id="age" type="number" placeholder='Age' className="border border-slate-400 rounded-sm indent-1"/>
          </>
        </div>
    
        <input type="submit" className=" bg-green-600 w-full py-2 rounded-full text-white mt-7 "/>
      </form>
    </div>
  );
}

export default ControlledInput;
