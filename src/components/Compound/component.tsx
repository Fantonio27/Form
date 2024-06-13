import React, { createContext, useContext } from "react"

type Post = {
    title: string, 
    date: string,
    description: string,
}
const Context = createContext<null | Post>(null)

function GetContext () {
    const postContext = useContext(Context)
    return postContext
}

export default function Component({children, post}: {children: React.ReactNode, post: Post}){
    return (
        <Context.Provider value={post}>
            <div className="border border-slate-400 p-5 w-max">
                {children}
            </div>
        </Context.Provider>
       
    )
}



Component.Title =  function Title () {
    const post = GetContext();
    return <h1>{post?.title}</h1>
}

Component.Description =  function Description () {
    const post = GetContext();
    return <p>{post?.description}</p>
}

Component.Date = function Date () {
    const post = GetContext();
    return <p>{post?.date}</p>
}

Component.ButtonGroup = function ButtonGroup () {
    return (
        <div className="space-x-3">
            <button className="bg-red-300 px-5 rounded-md">Cancel</button>
            <button className="bg-green-300 px-5 rounded-md">Upload</button>
        </div>
    )
}