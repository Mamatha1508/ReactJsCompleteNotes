import React,{useReducer} from "react";

let UseReducerMultipleReducers18 =()=>
{
    const initialState={
        firstCounter :20,
       
    }

    const initialState1={
        secondCounter :30
    }

    let reducer=(state,action)=>
    {
        switch(action.type)
        {
            case 'increment': return {firstCounter : state.firstCounter+20}
            case 'decrement': return {firstCounter : state.firstCounter-20}
            case 'reset': return {firstCounter : initialState.firstCounter}
            default : return {firstCounter : state.firstCounter}
        }
    }
    let reducer1=(state,action)=>
    {
        switch(action.type)
        {
            case 'increment': return { secondCounter: state.secondCounter+30}
            case 'decrement': return {secondCounter : state.secondCounter-30}
            case 'reset': return {secondCounter : initialState1.secondCounter}
            default : return {secondCounter : state.secondCounter}
        }
    }
    const [count,setCount] = useReducer(reducer,initialState);
    const [count1,setCount1]=useReducer(reducer1,initialState1);


    return(
        <div>
           <div> count -{count.firstCounter}</div>
            <button onClick={()=>setCount({type:'increment'})}>Increment20</button>
            <button onClick={()=>setCount({type:'decrement'})}>Decrement20</button>
            <button onClick={()=>setCount({type: 'reset'})}>Reset20</button>
            <div> count1 -{count1.secondCounter}</div>
            <button onClick={()=>setCount1({type:'increment'})}>Increment30</button>
            <button onClick={()=>setCount1({type:'decrement'})}>Decrement30</button>
            <button onClick={()=>setCount1({type:'reset'})}>Reset30</button>
        </div>
    )
}

export default UseReducerMultipleReducers18;