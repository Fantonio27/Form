export default function TestingComponent (){
    return (
        <form className="border border-slate-400 w-max rounded-lg p-5 grid gap-3 m-auto">
            <div>
                <label htmlFor="email" className="block">Email Address</label>
                <input type="type" id="email" className="w-full border border-slate-300 rounded-md"/>
                <p className=" text-slate-500 text-sm">We'll never share your email with anyone else.</p>
            </div>
            <div>
                <label htmlFor="password" className="block">Password</label>
                <input type="password" id="password" className="w-full border border-slate-300 rounded-md"/>
            </div>
            <div>
                <label htmlFor="confirmpassword" className="block">Confirm Password</label>
                <input type="password" id="confirmpassword" className="w-full border border-slate-300 rounded-md"/>
            </div>
            <p className=" text-red-600 font-semibold">Error</p>
            <button className="px-5 py-1 bg-sky-500 rounded-lg text-white">Submit</button>
        </form>
    )
}