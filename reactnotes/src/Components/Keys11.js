import React from "react";

let Keys11=()=>
{
    const persons=['a','b','c','d'];
    const personList =persons.map(person=><h1 key={person}>{person}</h1>)
    return(
    {
        personList
    }  ) 
}

export default Keys11;