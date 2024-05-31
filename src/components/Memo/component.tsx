import { memo, useContext } from "react";
import {type Name } from ".";
import { ThemeContext } from "@/lib/context";
const Component = memo(function Component({name} : {name: Name}) {
    console.log("Components");

    const getdata = useContext(ThemeContext)

    return (
      <div className={`${getdata && 'bg-slate-500'}`}>
          <h1>Memo Component</h1>
          <p className=" text-red-400">Your First Name: {name.firstName}</p>
          <p className=" text-red-400">Your Last Name: {name.lastName}</p>
      </div>
    );
  })
  
  export default Component;
  