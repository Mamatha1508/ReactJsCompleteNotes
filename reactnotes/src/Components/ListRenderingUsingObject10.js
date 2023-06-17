import React from "react";
import ListRendering9 from "./ListRendering9";

let ListRenderingUsingObject10 =()=>
{
    const PersonList=[
        {
            id : 1,
            name : 'M',
            age: 25,
            skill : 'react'
        },
        {
            id : 2,
            name : 'M1',
            age: 26,
            skill : 'Angular'
        },
        {
            id : 1,
            name : 'M2',
            age: 27,
            skill : 'Node'
        },
        {
            id : 1,
            name : 'M3',
            age: 28,
            skill : 'Vue'
        }
    ]
    let personsList= PersonList.map(person=>(<ListRendering9 person={person} />))
    return(
        <div>
            {personsList}
        </div>
    )
}

export default ListRenderingUsingObject10;