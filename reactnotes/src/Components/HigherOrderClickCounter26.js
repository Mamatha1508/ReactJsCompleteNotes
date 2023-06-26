import React,{Component} from "react";
import UpdatedComponent from "./HigherorderComponents25";

class HigherOrderClickCounter26 extends Component
{
    render()
    {
        return(
            <di>
               <h1>Clicked {this.props.st1} {this.props.name}</h1> 
               <button onClick={this.props.increment}>Click here</button>
            </di>
        )
    }
}

export default UpdatedComponent(HigherOrderClickCounter26);