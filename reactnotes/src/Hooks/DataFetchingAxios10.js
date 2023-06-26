import React,{useState,useEffect} from "react";
import axios from 'axios';

let DataFetchingAxios10 =()=>
{
    const [posts,setPosts]=useState([]);
    const [post,setPost]=useState({})
    const [postId,setPostId] = useState(1);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res)=>
        {
            
            setPosts(res.data);
            console.log(res.data)
        }).catch(error=>console.log(error))

        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((res)=>
        {
            console.log('res',res)
           setPost(res.data);
            
        }).catch(e=>console.log(e))
    },[postId])
    return(
        <div>
            <input type="text" value={postId} onChange={(e)=>setPostId(e.target.value)}/>

            <h1>{post.title}</h1>
            <div>
            {
                posts.map(post=><li key={post.id}>{post.title}</li>)
            }
            </div>

           
        </div>
    )
}

export default DataFetchingAxios10;