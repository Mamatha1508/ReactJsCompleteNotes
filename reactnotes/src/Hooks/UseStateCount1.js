import React,{useState} from "react";

let UseStatecount1=()=>
{
    const [count,setCount] = useState(0);
    
    return(
        <div>

         <h1>count {count}</h1> 
         <button onClick={()=>setCount(count+1)}>Click here</button>  
        </div>
    )
    }

    export default UseStatecount1;