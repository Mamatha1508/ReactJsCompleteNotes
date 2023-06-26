import React,{useEffect,useState} from "react";

import UseEffectEmptyArrayDependancy7 from "./UseEffectEmptyArrayDependancy7";

let UseEffectComponentRemoval9 =()=>
{
    
    const [toggle,setToggle]=useState(true)
   
    return(
        <div>
         
            <button onClick={()=>setToggle(!toggle)}>Toggle</button>
            {toggle && <UseEffectEmptyArrayDependancy7/>}
        </div>
    )
}

export default UseEffectComponentRemoval9;