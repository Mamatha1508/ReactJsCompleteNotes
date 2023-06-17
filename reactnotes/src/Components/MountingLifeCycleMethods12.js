import React,{Component} from "react";
import MountingLifeCycleMethodsChildComp13 from "./MountingLifeCycleMethodsChildComp13";


class MountingLifeCycleMethods12 extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            name : "Mamatha"
        }
        console.log('MountingLifeCycleMethods12 parent constructor')
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log('MountingLifeCycleMethods12 parent getDerivedStateFromProps ');
        console.log('this method is used when the state is dependent o the props being passed to it and based on props it sets the state.')
        console.log('It returns the updated state or null');
        return null;
    }

    componentDidMount()
    {
        console.log('MountingLifeCycleMethods12 parent componentDidMount ');
        console.log('This is invoked when all th parent and child components renders on UI')
    }
    render()
    {
        console.log('MountingLifeCycleMethods12 parent render')
        return(
            <div>
             <h1>MountingLifeCycleMethods12 parent</h1> 
            <MountingLifeCycleMethodsChildComp13/>
               </div>

        )
    }
}

export default MountingLifeCycleMethods12;