import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {Postdata} from "../../Redux/state";
import Prepostcontent from "./Prepostcontent/Prepostcontent";


type PostDataType = {
    postData : Array<Postdata>
}


const Profile = (props:PostDataType) => {

    return <div>
        <Prepostcontent />
        <MyPosts postData={props.postData} />

    </div>

}

export default Profile;