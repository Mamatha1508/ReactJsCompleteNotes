import React,{useEffect,useState} from "react";

let UseEffect5 =()=>
{
    const [count,setCount] = useState(0);
    const [count1,setCount1]= useState(0);
    // let clickHandler=()=>
    // {
    //     setCount1((prevCount)=>prevCount+1);
    //     console.log('count in handler',count1)
    //     document.title= `Clicked ${count1} times `;
    // }

    useEffect(()=>{
        document.title=`Clicked ${count} times`
    })
    console.log('UseEffect hook is used to implement side effects which means the operations that are done outside componnet such as api calls or setting document title etc.');
    console.log('It is called whenever the component is re rendered or rendered')
    return(
       
        <div>
            <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
            {/* <button onClick={()=>clickHandler()}>Clicked {count1} times</button> */}
        </div>
    )
}

export default UseEffect5;