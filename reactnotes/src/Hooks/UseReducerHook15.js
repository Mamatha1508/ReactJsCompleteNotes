import React,{useReducer} from "react";

let UseReducerHook15 = ()=>
{
    const initialState=0;
   
    let reducer=(state,action)=>
    {
        switch(action)
        {
            case 'increment' : return state+1;
            case 'decrement' : return state-1;
            case 'reset' : return initialState;
             default : return  state;
        }
    }
   
    const [count,dispatch]=useReducer(reducer,initialState)
    
    
    return(
        <div>
            count = {count}
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
        </div>
    )
}

export default UseReducerHook15;