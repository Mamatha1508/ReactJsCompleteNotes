import React from "react";

let UseCallbackAge24=({age,incrementHandler})=>
{
    console.log('age',age);
    
    return(
        <div>
            age- {age}
            <button onClick={()=>incrementHandler()}>Increment age</button>
        </div>
    )
}

export default React.memo(UseCallbackAge24);