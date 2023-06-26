import React,{useState} from "react";

let UseStateWithObject3 =()=>
{
    const [name,setName]=useState({firstName:'',lastName:''})
    return(
        <div>
           <div>
           FirstName : {name.firstName}
            lastName : {name.lastName}</div> 
            <input type="text" value={name.firstName} onChange={(e)=>setName({...name,firstName:e.target.value})}/>
            <input type="text" value={name.lastName} onChange={(e)=>setName({...name,lastName:e.target.value})}/>
       </div>
    )
}

export default UseStateWithObject3;