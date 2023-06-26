import React,{useState,useEffect} from "react";
import axios from "axios";

let DataFetchingAxiosOnButtonClick11 =()=>
{
    const [post,setPost]=useState({});

    const [postId,setPostId]=useState(1);

    const [idFromButtonClick,setidFromButtonClick] =useState(1);

    let clickHandler=()=>
    {
        setidFromButtonClick(postId);
    }
    useEffect(()=>
    {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`).then((res)=>
        {
            setPost(res.data)
        }).catch(e => console.log(e))
    },[idFromButtonClick])

    return(
        <div>
            <input type="text" value={postId} onChange={(e)=>setPostId(e.target.value)}/>
            <button  onClick={clickHandler}> Click</button>
          <h2>
            {
                post.title
            }
          </h2>
        </div>
    )

}

export default DataFetchingAxiosOnButtonClick11;