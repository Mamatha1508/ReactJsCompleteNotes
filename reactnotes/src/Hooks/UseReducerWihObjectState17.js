import React,{useReducer} from "react";


const initialState={
    countValue : 10
}
let reducer=(state,action)=>
{
    console.log('state',state)
    switch(action.type)
    {
        case 'increment' :
             return {countValue: state.countValue+10};
        case 'decrement' : return {countValue : state.countValue-10};
        case 'reset' : return {countValue :initialState.countValue};
        default : return {countValue : state.countValue};
    }
}
let UseReducerWithObjectState17=()=>
{
    
    const [count,dispatch]= useReducer(reducer,initialState);
    console.log('count',count)
    return(
        <div>
           <div>count- {count.countValue}</div> 
            <button onClick={()=>dispatch({type: 'increment'})}>Increment10</button>
            <button onClick={()=>dispatch({type:'decrement'})}>Increment10</button>
            <button onClick={()=>dispatch({type:'reset'})}>Increment10</button>
        </div>
    )
}

export default UseReducerWithObjectState17;