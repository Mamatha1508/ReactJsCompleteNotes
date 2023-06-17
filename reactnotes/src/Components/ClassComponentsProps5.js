import React,{Component} from "react";

class ClassComponentsProps5 extends Component{
    
 
    render()
    {
        const {name , heroName} = this.props;
        return(
            <h1>
                Hi {name} a.k.a {heroName}
            </h1>
        )
    }
}

export default ClassComponentsProps5;