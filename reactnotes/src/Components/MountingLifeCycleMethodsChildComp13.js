import React,{Component} from "react";

class MountingLifeCycleMethodsChildComp13 extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            message : "child comp"
        }
        console.log('MountingLifeCycleMethodsChildComp13 child constructor')
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log('MountingLifeCycleMethodsChildComp13 child getDerivedStateFromProps');
        return null;

    }
    componentDidMount()
    {
        console.log('MountingLifeCycleMethodsChildComp13 child componentDidMount');

    }
    render()
    {
        console.log('MountingLifeCycleMethodsChildComp13 child render')
        return(
            <div>MountingLifeCycleMethodsChildComp13 child</div>
        )
    }
}

export default MountingLifeCycleMethodsChildComp13;