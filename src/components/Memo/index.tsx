import { useCallback, useState } from "react";
import Component from "./component";
import ListItems from "./list";
import Second from "./second";

export type Name = {
  firstName: string, 
  lastName : string
}

const fakeData : Name[] = [
  {
    firstName : "Francis",
    lastName: "Antonio"
  },
  {
    firstName : "Louie",
    lastName: "Gabriel"
  },
  {
    firstName : "Juan",
    lastName: "Tamad"
  },
]

function Memo() {
    console.log("Main Memo Components")
    const [dataform, setDataform] = useState<Name>({
      firstName : "",
      lastName: ""
    },);

    const [datalist, setDataList] = useState(fakeData);

    function OnChange (event : React.FormEvent<HTMLInputElement>) {
      const {name, value} = event.currentTarget

      setDataform(prev => (
        {
          ...prev, [name]: value
        }
      )
    )
    }

    const DeleteRecord = useCallback(() =>{
      console.log("Hello")
      setDataList(prev => prev.slice(0, prev.length - 1))
    },[])
    return (
      <>
          <h1>Using Memo Main</h1>
          <Second name="Francis"/>
          <div className="space-x-5 my-5">
            <input 
              type="text" 
              placeholder="FirstName" 
              className="border boder-slate-300"
              name="firstName"
              value={dataform.firstName}
              onChange={OnChange}
            />
            <input 
              type="text" 
              placeholder="LastName" 
              className="border boder-slate-300"
              name="lastName"
              value={dataform.lastName}
              onChange={OnChange}
            />
          </div>
          <button className="border border-slate-300 px-3"onClick={()=> {setDataList(prev=> ([...prev, dataform]))}}>Add Student</button>
          <Component name={dataform}/>
          <ListItems lists={datalist} onDelete={DeleteRecord}/>
          {/* <ListItems lists={datalist} /> */}

      </>
    );
  }
  
  export default Memo;
  