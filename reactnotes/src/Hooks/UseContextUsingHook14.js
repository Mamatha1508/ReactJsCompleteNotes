import React,{useContext} from "react";
import { UserContext } from "../App";

let UseContextUsingHook14 =()=>
{
    let value1= useContext(UserContext);
    return(
        <div>
           name  {value1}
        </div>
    )

}

export default UseContextUsingHook14;