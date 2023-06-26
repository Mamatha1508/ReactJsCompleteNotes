import React,{Component} from "react";
import Refs20 from "./Refs20";
import ChildRefs22 from "./ChildRefs22";

class ParentRefs21 extends Component
{
    constructor(props)
    {
        super(props)
        this.parentRef= React.createRef();
        this.clickHandler=this.clickHandler.bind(this);
        this.clickHandler1= this.clickHandler1.bind(this);
    }
   
    clickHandler()
    {
        console.log('parent ref',this.parentRef);
        console.log('child ref in parent',this.parentRef.current);
        console.log('If there is a parent componnet which has child componnet and we have a scenario to focus on child coponent on clcik of button in parent componnet');
        console.log('In this case we create a reference in parent component and add the reference to child componnet.Now this parent componnet ref can acceess all he refs in child componnets');
        console.log('In current case we have added 2 ref in child componnets and the parentRef can access both the childRefs and the focusInput 1 and 2 will be avaiable under this.parentRef.current prototype');
        this.parentRef.current.focusInput();
    }
    clickHandler1()
    {
        console.log('parent clcikhandler1', this.parentRef.current);
        this.parentRef.current.focusInput1();
    }
    render()
    {
        return(
            <div>
                <ChildRefs22 ref={this.parentRef} />
                <button onClick={this.clickHandler} >Click Ref</button>
                <button onClick={this.clickHandler1}>Click child Ref</button>
            </div>
        )
    }
}

export default ParentRefs21;