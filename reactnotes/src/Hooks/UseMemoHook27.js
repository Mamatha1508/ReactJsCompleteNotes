import React,{useState,useMemo} from "react";
import UseCallbackButton26 from "./UseCallbackButton26";


let UseMemoHook27=()=>
{
    const [count,setCount]= useState(0);
    const [age,setAge]=useState(25)
    

    let IncrementCount=()=>
    {
     console.log('increment age1')
     setCount(prevCount=>prevCount+1);
    }

  let IncrementAge=()=>
  {
        setAge(prevAge=>prevAge+1)
  }

   let Incrementer=useMemo(()=>
   {
    let i=0;
    while(i<200000000)
    {
        i++;
    }
    return count%2==0;
   },[count])

console.log('inc',Incrementer)
    return(

        <div>
            <UseCallbackButton26  ageSalButton={age}  ageSalIncrement={IncrementAge}/>
            {count}
            <button onClick={()=>IncrementCount()}>Increment</button>
           <div>{Incrementer ? 'true' : 'false'}</div>
        </div>
    )
}

export default UseMemoHook27