import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {Postdata} from "../../../Redux/state";

type MyPostPropsType = {
    postData: Array<Postdata>
    pushFunc: (postText: string) => void
    textArreaText: string
    changeTextArreaValue:(value:any)=>void

}


const MyPosts = (props: MyPostPropsType) => {

    let mapPost = props.postData
        .map((p,index)=> (<Post key={index} message={p.postText} like={p.likesCount}/>))

    let textarea = React.createRef<HTMLTextAreaElement>();
    // let textArreaValue = textarea.current?.value

    const addPost = () => {
        if (textarea.current) {
            props.pushFunc(textarea.current.value)
        }
    }


    const changeValueFunc = () => {
let text = textarea.current?.value
        props.changeTextArreaValue(text)
    }


    return (
        <div>
            My posts
            <div>
                <textarea
                    ref={textarea}
                    value={props.textArreaText}
                    onChange={changeValueFunc}
                 >
                </textarea>
                <button onClick={addPost}>Add post</button>
                {mapPost}
            </div>

        </div>


    )
}

export default MyPosts;