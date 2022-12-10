import profile from "../Components/Profile/Profile";
import {rerenderEntireTree} from "../render";

export type State = {
    profilePage:Profilepage
    messagesPage:Messagespage
    sideBar:Sidebartype
}

//------------profilePage
export type Profilepage = {
    postData: Array<Postdata>
    textArreaText:string
}

export type Postdata = {
    postText : string //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    likesCount : number
}


//---------messagesPage

export type Messagespage = {
    users : Array<Users>
    messages : Array<Messages>
}


export type Users = {
    name: string
    id: number
}


export type Messages = {
    message : string
}

//------sideBar
export type Sidebartype = {
    user1 :string
    user2 :string
    user3 :string
}


//связка данных с типизацией данных
//указание типа(State) для конуретных данных(state)
export let state:State = {

    profilePage:{
        postData:[
            {postText:'Hello World', likesCount: 11},
            {postText:'Hello Kostya', likesCount: 12},
            {postText:'Hello Komk', likesCount: 41}
        ],
        textArreaText: 'hh'

    },
    messagesPage:{
        users:[
            { name: "Gosha", id: 0 },
            { name: "Sveta", id: 1 },
            { name: "Bob", id: 2 }
        ],
        messages:[
            { message: 'Kinch' },
            { message: 'Kinch1' },
            { message: 'Kinch2' }

        ]
    },
    sideBar:{
        user1: 'Antony',
        user2: 'Andrew',
        user3: 'Rodrigo'
    }
}

export let pushFunc = (newPostMessage:string) => {
    let newObj:Postdata = {postText:newPostMessage,likesCount:0}
    let newPost =
        state.profilePage.postData.push(newObj)
    rerenderEntireTree(state)
        // {...state, profilePage: {...state.profilePage,postData:
        //         [...state.profilePage.postData,{postText:newPostMessage,likesCount:0}]}}
    return newPost
}


export let textArreaText = state.profilePage.textArreaText

export function changeTextArreaValue (textArreaValue:string) {

    // let value = {...state,profilePage: {...state.profilePage,
    //         textArreaText:state.profilePage.textArreaText,textArreaValue}}

    // let textArreaTextvalue = state.profilePage.textArreaText
// textArreaTextvalue = textArreaValue
    // console.log(textArreaTextvalue)

    let push = state.profilePage.textArreaText = textArreaValue
    rerenderEntireTree(state)

    return push
}




