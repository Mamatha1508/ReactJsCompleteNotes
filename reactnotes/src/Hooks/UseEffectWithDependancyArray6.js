import React ,{useState,useEffect} from "react";

let UseEffectWithDependancyArray=()=>
{
    const [count,setCount]= useState(0);
    const [name,setName]=useState('');
    useEffect(()=>
    {
        console.log('inside effect')
        document.title=`Clicked ${count} times`;
       // document.write('abc')
    },[count])

    console.log('If we want the useeffect to run conditionally instead of running on each render we specify the value in dependancy array which is 2nd param of useEffect')
    return(
        <div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={()=>setCount(count+1)}>Click {count} times</button>
        </div>
    )


}

export default UseEffectWithDependancyArray;