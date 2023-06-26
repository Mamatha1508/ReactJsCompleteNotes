import React from "react";
import {UserContext} from '../App'

let UserContextWithoutHook13=()=>
{
    return(
        <div>
            <UserContext.Consumer>
            {
               user=> <div> name -{user}</div>
                
            }
            </UserContext.Consumer>

        </div>
    )
}

export default UserContextWithoutHook13;