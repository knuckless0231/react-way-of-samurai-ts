import React from 'react';
import s from './Dialogs.module.css';

import {Messages, Users} from "../../Redux/state";
import Dialogusers from "./Dialogusers/Dialogusers";
import Message from "./Messages/Messages";

type DialoguserspropsType = {
    users: Array<Users>
    messages: Array<Messages>
}


const Dialogs = (props: DialoguserspropsType) => {
    console.log('dialog', props)
    //MAP USERS
    let messageUser = props.users
        .map(user =>
            (<Dialogusers name={user.name} id={user.id}/>)
        )
    //MAP MESSAGES

    let messagesMap =
        props.messages
            .map(m => (<Message message={m.message}/>))


    // let textarea = React.createRef();
    // let text = ()=>{alert( textarea.current.value)}

    let textArrea = React.createRef<HTMLTextAreaElement>()

    let btFoo = ()=>{
        alert(textArrea.current?.value)
    }

    //DIALOG RESULT V V V V

    return <div className={s.dialogs}>
        <div>
            {messageUser}
        </div>
        <div>
            {messagesMap}
        </div>

        <textarea ref={textArrea}></textarea>
        <button onClick={btFoo}></button>


    </div>
}
export default Dialogs;
