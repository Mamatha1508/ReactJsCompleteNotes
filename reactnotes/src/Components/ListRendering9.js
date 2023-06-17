import React from "react";

let ListRendering9 =({person})=>
{
    // const names=['mamatha','Dinesh','Mounika','SaiRam','sam']
    // return(
    //     <div>
    //         {
    //             names.map(name=>(<h1>{name}</h1>))
    //         }
    //     </div>
    // )

    return(
        <div>
            <h1>I am  {person.name}.I am {person.age} years old.I know {person.skill}</h1>
        </div>
    )
}

export default  ListRendering9;