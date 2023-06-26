import React ,{useEffect , useState} from "react";

let UseEffectEmptyDependancyMistakes8 =()=>
{
    const [count , setCount] = useState(0);
    useEffect(()=>
    {
        let interval= setInterval(()=>
        {
            console.log('inside set interval')
            setCount(count+1);
        },1000)

        return ()=>
        {
            clearInterval(interval)
        }
            
    },[])

    console.log('The mistake we do in terms of empty dependancy arry is that in setInterval if we run useEffect only once then the setInterval continues running but the sount wont change as the state was not changed')
    return(
        <div>
            {count}
        </div>
    )
}

export default UseEffectEmptyDependancyMistakes8;