import React,{PureComponent} from "react";

class PureComponent16 extends PureComponent
{
    render()
    {
        console.log('pure componnet render')
        return(
            <div>
               Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComponent16;