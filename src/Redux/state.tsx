export type State = {
    profilePage:Profilepage
    messagesPage:Messagespage
    sideBar:Sidebartype
}

//------------profilePage
export type Profilepage = {
    postData: Array<Postdata>
}

export type Postdata = {
    postText : string
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




