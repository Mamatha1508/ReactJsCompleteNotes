import React,{Component} from "react";

class StateandSetState6 extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            count :0
        }
    }
    // ClickHandler()
    // {
    //     this.setState({
    //         count: this.state.count+1
    //     })
    // }

    ClickHandler5()
    {
        this.setState((prevState)=>(
            {
                count: prevState.count+1
            }
        ),()=>console.log('React executes asynchrnously and anything written outside setState executes 1st and later executes setState,but if we want something to be executed after setting state, we can add a fn as a 2nd param to setState'))
    }
    
    render()
    {
        return(
            <div>
                  <h1>{this.state.count}</h1>
                  <button onClick={()=>this.ClickHandler5()}>Counter</button>
            </div>
          
        )
    }
}
export default StateandSetState6;