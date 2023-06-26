import React, {useState,useCallback} from "react";
import UseCallbackAge24 from "./UseCallbackAge24";
import UseCallbackSalary25 from "./UseCallbackSalary25";
import UseCallbackButton26 from "./UseCallbackButton26";

let UseCallbackHook23=()=>
{

    const [age,setAge]=useState(25);
    const [salary,setSalary]=useState(100000);
    const [age1,setAge1]=useState(0);
    const [salary1,setSalary1]=useState(1000000);
   

   let IncrementAge=useCallback(()=>
   {
    console.log('increment age')
    setAge(age+1);
   },[age])

   let IncrementSalary=useCallback(()=>
   {
    console.log('increment salary')
    setSalary(prevSal=>prevSal+100000);
   },[])

   
   

    return(
        <div>
            <UseCallbackAge24  age={age}  incrementHandler={IncrementAge}/>
            <UseCallbackSalary25  sal={salary} incrementHandler1={IncrementSalary}/>
            {/* <UseCallbackButton26 ageSalButton={age1} ageSalIncrement={IncrementAge1}/>
            <UseCallbackButton26 ageSalButton={salary1} ageSalIncrement={IncrementSalary1} /> */}
        </div>
    )
}

export default UseCallbackHook23;