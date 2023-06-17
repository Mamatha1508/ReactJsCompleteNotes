import React,{Component} from "react";
import UpdatingLifeCycleMethodChild15 from "./UpdatingLifeCycleMethodChild15";

class UpdatingLifeCycleMethod14 extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            message : 'parent'
        }
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log('UpdatingLifeCycleMethod14 parent getDerivedStateFromProps');
        console.log('this method is used when the state is dependent o the props being passed to it and based on props it sets the state.')
        console.log('It returns the updated state or null');
        return null;
    }
    shouldComponentUpdate(nextprops,nextState)
    {
        console.log('UpdatingLifeCycleMethod14 parent shouldComponentUpdate');
        console.log('it compares the prev props prev state with current props and current state and returns true if they have changed or returns false if they are same ')
        console.log('If it returns false then component wont re render otherwise it re renders ');
        return true;
    }
    getSnapshotBeforeUpdate(nextProps,nextState)
    {
        console.log('UpdatingLifeCycleMethod14 parent getSnapshotBeforeUpdate');

        return null;
    }
    componentDidUpdate()
    {

        console.log('UpdatingLifeCycleMethod14 parent componentDidUpdate');
        console.log('This gets called after the omponent rerenders');

    }
    render()
    {
        console.log('UpdatingLifeCycleMethod14 parent render')
        return(
            <div>
               <UpdatingLifeCycleMethodChild15/> 
            </div>
        )
    }
}

export default UpdatingLifeCycleMethod14;