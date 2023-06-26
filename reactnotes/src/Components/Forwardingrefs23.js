import React,{Component} from "react";
import ForwardingRefsChild24 from "./ForwardingRefsChild24";

class ForwardingRefs23 extends Component
{
    constructor(props)
    {
        super(props)
        this.parentRef= React.createRef();
        this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler()
    {
        this.parentRef.current.focus();
    }
    render()
    {
        console.log('in forwars ref instead of addung ref on child component will forward it to child ref')
        return(
            <div>
                <ForwardingRefsChild24 ref={this.parentRef}/>
                <button onClick={this.clickHandler}>Forwars ref</button>
            </div>
        )
    }
}

export default ForwardingRefs23;