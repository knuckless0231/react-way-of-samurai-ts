import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {Postdata} from "../../../Redux/state";

type MypostpropsType ={
    postData: Array<Postdata>
}


const MyPosts = (props:MypostpropsType) => {

    let mapPost = props.postData
        .map(p=>(<Post message= {p.postText} like={p.likesCount}/>))

    let textarea = React.createRef();
    let text = ()=>{
        // alert(textarea.current.value)
    }


    return (
        <div>
            My posts
            <div>
                {/*<textarea ref={textarea}></textarea>*/}
                {/*<button onClick={text}>Add post</button>*/}
                {/*{mapPost}*/}
            </div>

        </div>


    )
}

export default MyPosts;