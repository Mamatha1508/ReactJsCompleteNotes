import React,{useEffect,useState} from "react";

let UseEffectEmptyArrayDependancy7 =()=>
{
    const [X, setX]= useState(0);
    const [Y,setY]= useState(0);

    useEffect(()=>
    {
        console.log('in effect')
        window.addEventListener('mousemove',(e)=>
        {
            console.log('in listener')
            setX(e.clientX)
            setY(e.clientY)
        })
       
        return ()=>
        {
            window.removeEventListener('mousemove',(e)=>
            {
                console.log('in remove listener')
                setX(e.clientX)
                setY(e.clientY)
            })
        }
    },[])
    console.log('If we want useEffect to run only once we declar empty dependancy array')
    return(
        <div>
            X : {X}
            Y : {Y}
        </div>
    )
}

export default UseEffectEmptyArrayDependancy7;