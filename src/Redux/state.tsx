import profile from "../Components/Profile/Profile";
import {observe} from "web-vitals/dist/modules/lib/observe";

let rerenderEntireTree = (state:State) => {
    console.log('rendered')

}

//main Type for all STATE
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
//указание типа(State) для конкретных данных(state)
export let state:State = {

    profilePage:{
        postData:[
            {postText:'Hello World', likesCount: 11},
            {postText:'Hello Kostya', likesCount: 12},
            {postText:'Hello Komk', likesCount: 41}
        ],
        textArreaText: ''

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
export let textArreaText = state.profilePage.textArreaText

//функция добавляющая новый пост
export let pushFunc = (newPostMessage:string) => {
    let newObj:Postdata = {postText:newPostMessage,likesCount:0}
    let newPost = state.profilePage.postData.push(newObj)
    rerenderEntireTree(state)
    state.profilePage.textArreaText = ''

    return newPost
}

//функиця меняющая значение при каждом новом вводе
export function changeTextArreaValue (textArreaValue:string) {
    let push = state.profilePage.textArreaText = textArreaValue
    rerenderEntireTree(state)

    return push
}

//Функия rerenderEntireTree
export const subscribe = (observer:any) => {
 rerenderEntireTree = observer
    console.log('changed')
}



