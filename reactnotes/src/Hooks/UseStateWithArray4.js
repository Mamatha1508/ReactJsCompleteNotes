import React,{useState} from "react";

let UseStateWithArray4 =()=>
{
    const [arr,setArr]=useState([])
    let addValues=()=>
    {
        setArr([...arr,Math.floor(Math.random()*10+1)])
    }
    return(
        <div>
            {arr}
            <button onClick={()=>addValues()}>Add</button>
        </div>
    )
}

export default UseStateWithArray4;