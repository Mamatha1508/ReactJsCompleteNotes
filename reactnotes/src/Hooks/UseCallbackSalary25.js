import React from "react";

let UseCallbackSalary25=({sal,incrementHandler1})=>
{
    console.log('salary in comp',sal);
   
    return(
        <div>
        Salary-{sal}
        <button onClick={()=>incrementHandler1()}>Increment Salary</button>
    </div>
    )
}

export default React.memo(UseCallbackSalary25);