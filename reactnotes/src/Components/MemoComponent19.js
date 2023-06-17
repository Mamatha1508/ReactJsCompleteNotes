import React from "react";

let MemoComponnet19 =({name})=>
{
    console.log('Pure component is only for class componnets and MemoComponents are for functional componnets')
    console.log('Memo comp works the same way as pure comp whereas we return the component in React.memo n case of memo component')
    return(
        <div>Memo component {name}</div>
    )
}

export default React.memo(MemoComponnet19);