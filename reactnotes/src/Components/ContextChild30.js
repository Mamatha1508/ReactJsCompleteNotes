import React,{Component} from "react";
import { UserProvider } from "./UseContext28";

class ContextChild30 extends Component
{
    render()
    {
        console.log('Context is used to pass the props down to intended child component witout actually passng it to  each nested child component');
        console.log('For this we need to create context then make a provider and a consumer and use provider in the main component and consumer in the child component that we want the props to be passed to')
        return(
            <UserProvider>
                {
                    (userName)=>{
                        return <div> Hello {userName}</div>
                    }
                }
            </UserProvider>
            
        )
    }
}
export default ContextChild30;