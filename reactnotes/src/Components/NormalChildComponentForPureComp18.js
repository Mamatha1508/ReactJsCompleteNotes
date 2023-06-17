import React,{Component} from "react";

class NormalChildComponnetForPureComp18 extends Component
{
    render()
    {
        console.log('Normal child componnet render')
        return(
            <div>
                {this.props.name}
            </div>
        )
    }
}

export default NormalChildComponnetForPureComp18;