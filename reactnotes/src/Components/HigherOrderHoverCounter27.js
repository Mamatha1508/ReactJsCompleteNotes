import React,{Component} from "react";
import UpdatedComponent from "./HigherorderComponents25";

class HigherOrderHoverCounter27 extends Component
{
    render()
    {
        return(
            <div onMouseOver={this.props.increment}>
                Hovered {this.props.st1} {this.props.name}
            </div>
        )
    }
}

export default UpdatedComponent(HigherOrderHoverCounter27);