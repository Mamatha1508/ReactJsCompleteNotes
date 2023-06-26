import React from "react";

let UseCallbackButton26 =({ageSalButton,ageSalIncrement})=>
{
    console.log('agesal button',ageSalButton);
    console.log('agesal fn',ageSalIncrement)
    
    return(
        <div>
            age sal button-{ageSalButton}
             <button onClick={()=>ageSalIncrement()}>Increment age Salary</button>
        </div>
    )
}

export default UseCallbackButton26;;