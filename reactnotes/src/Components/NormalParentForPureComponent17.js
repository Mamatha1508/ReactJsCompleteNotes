import React,{Component, PureComponent} from "react";
import NormalChildComponnetForPureComp18 from "./NormalChildComponentForPureComp18";
import PureComponent16 from "./PureComponent16";
import MemoComponent19 from "./MemoComponent19";

class NormalParentForPureComponnet17 extends PureComponent
{
    constructor(props)
    {
        super(props)
        this.state={
            message : 'Mamatha'
        }
    }
    componentDidMount()
    {
        setInterval(()=>
        {
        this.setState({
            message : 'Mamatha'
        })},2000)
        
    }
    render()
    {
        console.log('parent comp for pure componnet');
        console.log('Pure componnet always make a shallow comparision btwn prev props current props, prev state and current state and re renders the componnet');
        console.log('pure componnet always executes shouldComponnetUpdate methid and if it returns true then only it re renders the componnet whereas nrml doesnt check these');
        console.log('It is always advised to make all child comps pure comps when parent comp is pure to avoid confusion')
        return(
            <div>
               <PureComponent16  name={this.state.message}/>
                <NormalChildComponnetForPureComp18 name={this.state.message} />
                <MemoComponent19 name={this.state.message} />
            </div>
        )
    }
}

export default NormalParentForPureComponnet17;