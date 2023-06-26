import React,{useEffect, useReducer} from "react";
import axios from "axios";

let UseReducerAxios22=()=>
{
    const initialState={
        post :{},
        loading : true,
        error: ''
    }
    let reducer=(state,action)=>
    {
        switch(action.type)
        {
            case 'FETCH_SUCCESS' : return {
                post : action.post,
                loading: false,
                error: ''
            }
            case 'FETCH_ERROR': return {
                post : {},
                loading : false,
                error : 'Something went wrong'
            }
            default : return state
        }
    }

    useEffect(()=>
    {
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then(
            (resp)=>
            {
              setPost({type : 'FETCH_SUCCESS' , post : resp.data})
              
            }
        ).catch(()=> {
            setPost({type : 'FETCH_ERROR'})
        })
    },[])
    const [post,setPost]=useReducer(reducer,initialState)
    console.log('post',post)
   
    return(
        <div>
            {
                post.post.title
            }
            

        </div>
    )
}

export default UseReducerAxios22;