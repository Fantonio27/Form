import { memo } from "react";
import {type Name } from ".";

const Component = memo(function Component({name} : {name: Name}) {
    console.log("Components");

    return (
      <>
          <h1>Memo Component</h1>
          <p className=" text-red-400">Your First Name: {name.firstName}</p>
          <p className=" text-red-400">Your Last Name: {name.lastName}</p>
      </>
    );
  })
  
  export default Component;
  