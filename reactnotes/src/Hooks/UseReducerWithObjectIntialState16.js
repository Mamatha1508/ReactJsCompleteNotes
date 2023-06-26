import React,{useReducer} from "react";

let UseReducerWithObjectInitialState16 =()=>
{
    const initialState=5;
    const reducer=(state,action)=>
    {
       switch(action.type5)
       {
            case 'increment' : return state+5;
            case 'decrement' : return state-5;
            case 'reset' : return initialState;
            default : return state

       }
    }
    const [count,dispatch] = useReducer(reducer,initialState)
    return(
        <div>
            count -{count}
            <button onClick={()=>dispatch({type5:'increment'})}>Increment5</button>
            <button onClick={()=>dispatch({type5: 'decrement'})}>Decrement5</button>
            <button onClick={()=>dispatch({type5:'reset'})}>Reset</button>
        </div>
    )
}

export default UseReducerWithObjectInitialState16;