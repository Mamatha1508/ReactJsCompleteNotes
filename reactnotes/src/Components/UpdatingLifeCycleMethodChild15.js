import React,{Component} from "react";

class UpdatingLifeCycleMethodChild15 extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            message:'child'
        }
        console.log('UpdatingLifeCycleMethodChild15 child constructor')
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log('UpdatingLifeCycleMethodChild15 child getDerivedStateFromProps')
        return null;
    }
    shouldComponentUpdate(nextprops,nextState)
    {
        console.log('UpdatingLifeCycleMethodChild15 child shouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(nextProps,nextState)
    {
        console.log('UpdatingLifeCycleMethodChild15 child getSnapshotBeforeUpdate');
        return null;
    }
    componentDidUpdate()
    {
        console.log('UpdatingLifeCycleMethodChild15 child componentDidUpdate');

    }
    render()
    {
        console.log('UpdatingLifeCycleMethodChild15 child render');
        console.log('orde in which component re-renders : 1. getDerivedStateFromProps parent 2. shouldCompoenntUpdate parent 3. render parent 4. getDerivedStateFromProps child 5.shouldCompoenntUpdate child 6. render child 7.getSnapshotBeforeUpdate child 8. getSnapshotBeforeUpdate parent 9. componentDidUpdate child  10. componentDidUpdate parent')
        return(
            <div>
                UpdatingLifeCycleMethodChild15
            </div>
        )
    }
}
export default UpdatingLifeCycleMethodChild15;