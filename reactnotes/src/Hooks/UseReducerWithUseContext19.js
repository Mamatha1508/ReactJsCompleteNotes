import React, { useContext } from "react";
import { UseReducerUserContext } from "../App";

let UseReducerWithUseContext19=()=>
{
    const UserContextWithReducer= useContext(UseReducerUserContext)
    return(
        <div>
            <div>count={UserContextWithReducer.ContextCount}</div>
            <button onClick={()=>UserContextWithReducer.ContextMethod('increment')}>Increment</button>
            <button onClick={()=>UserContextWithReducer.ContextMethod('decrement')}>Decrement</button>
            <button onClick={()=>UserContextWithReducer.ContextMethod('reset')}>Reset</button>
        </div>
    )
}

export default UseReducerWithUseContext19