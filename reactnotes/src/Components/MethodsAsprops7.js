import React,{Component} from "react";
import MethodsAsPropsChild8 from "./MethodsAsPropsChild8";

class MethodsAsprops7 extends Component
{
    constructor(props)
    {
        super(props);
        this.state= {
            message : "Parent"
        }
        this.greetParent=this.greetParent.bind(this)
    }
    greetParent(childName)
    {
        alert(`Hello ${this.state.message} from ${childName}`)
    }
    render()
    {
        return(
            <MethodsAsPropsChild8 greetHandler={this.greetParent}/>
        )
    }
}

export default MethodsAsprops7;