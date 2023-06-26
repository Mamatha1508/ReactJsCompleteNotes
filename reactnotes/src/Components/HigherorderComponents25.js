import React,{Component} from "react";

let UpdatedComponent=(OriginalComponent)=>
{
    class NewComponent extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            count:0
        }
    }
    clickHandler=()=>
    {
        this.setState((prevState)=>{
         return   {
            count : prevState.count+1
            }
        })
    }
    render()
    {
        console.log('Higher order componnts take a componnet as parameter a returns a new componnet');
        console.log('Higher order components are used to place the reusable code that can be used on other componnets');
        console.log('In our current scenrio, we are using same code for click and hover counters so instead of duplicating the same code, we placed the code ih Highreorder component and reused in click and hover counter components ')
        console.log('We can place the code at parent component and add click and hover counter components as child components and and place the common code in parent component and pass these function and  state as parameters but');
        console.log('on doing that the same state will be passed on to both the child components as the state is common for both, hence if w click even hover count increases and vice versa hence we go with Higher order components');
        console.log('Here we export click and hover counter from Higherorder omponnet and when clickcounter in app.js is called it goes to export step of click counter and calls UpdatedCounter which has clickcounter in it and the click counter is passed as param to updated counter');
        console.log('Similar is the case with hover counter and as at a time only one components is loaded and as they are individual components the state is not shared btwn the component')
        console.log('when we are passing props to these components, ')
        return(
            <div>
                <OriginalComponent increment={this.clickHandler} st1={this.state.count} name={this.props.name}/>

            </div>
        )
    }
}
return NewComponent;

}


export default UpdatedComponent;