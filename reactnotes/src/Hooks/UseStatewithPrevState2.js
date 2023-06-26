import React,{useState} from "react";

let UseStateWithPrevState2 =()=>
{
    const initialState=0;
    const [count,setCount]=useState(initialState)
    return(
        <div>
            count : {count}
            <button onClick={()=>setCount(initialState)}>Reset</button>
            <button onClick={()=>setCount((prevCount)=>prevCount+1)}>increment</button>
            <button onClick={()=>setCount((prevCount)=>prevCount-1)}>Decrement</button>
        </div>
    )
}

export default UseStateWithPrevState2;