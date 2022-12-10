import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {Postdata} from "../../Redux/state";
import Prepostcontent from "./Prepostcontent/Prepostcontent";


type PostDataType = {
    postData : Array<Postdata>
    pushFunc : (postText:string)=>void
    textArreaText:string
    changeTextArreaValue:(value:any)=>void

}


const Profile = (props:PostDataType) => {

    return <div>
        <Prepostcontent />
        <MyPosts postData={props.postData}
                 pushFunc={props.pushFunc}
                 textArreaText={props.textArreaText}
                 changeTextArreaValue={props.changeTextArreaValue}
        />

    </div>

}

export default Profile;