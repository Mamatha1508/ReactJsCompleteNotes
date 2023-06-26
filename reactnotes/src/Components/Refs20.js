import React,{Component} from "react";

class Refs20 extends Component
{
    constructor(props)
    {
        super(props)
        this.inputRef= React.createRef();
    }
    componentDidMount()
    {
        console.log(this.inputRef)
        this.inputRef.current.focus();
    }
    render()
    {
        console.log('Refs is the shorthand used for references in React. It is similar to keys in React. It is an attribute which makes it possible to store a reference to particular DOM nodes or React elements. It provides a way to access React DOM nodes or React elements and how to interact with it.')
        
        return(
            <input type="text" ref={this.inputRef}/>
        )
    }
}

export default Refs20;