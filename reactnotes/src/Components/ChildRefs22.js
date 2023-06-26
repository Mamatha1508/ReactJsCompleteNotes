import React,{Component} from "react";

class ChildRefs22 extends Component
{
    constructor(props)
    {
        super(props)
        this.childRef= React.createRef();
        this.childRef1= React.createRef();
    }
    focusInput()
    {
        this.childRef.current.focus();
    }
    focusInput1()
    {
        this.childRef1.current.focus();
    }
    render()
    {
        return(
            <div>
                  <input type="text" ref={this.childRef}/>
                  <input type="text" ref={this.childRef1}/>
            </div>
          
        )
    }
}

export default ChildRefs22;