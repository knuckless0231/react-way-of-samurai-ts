import React from 'react';
import s from './../Dialogs.module.css'
import {Messages, Messagespage} from "../../../Redux/state";

type MessagespropsType = {
    message : string
}

let Message = (props:MessagespropsType) => {
    return <div className={s.message}>
        {props.message}
    </div>
}

export default Message;