import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import s from './Content.module.css';
import Dialogs from './Components/Dialogs/Dialogs';
import {State} from "./Redux/state";
import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";


type ApppropsType = {
    state: State
}

function App(props: ApppropsType) {
    console.log('app', props)
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className={s.content}>
                    <Routes>
                        <Route path="/"
                               element={<Profile postData={props.state.profilePage.postData}/>}/>
                        <Route path="/dialogs"
                               element={<Dialogs users={props.state.messagesPage.users}
                                                 messages={props.state.messagesPage.messages}/>}/>
                        {/*<Route path="/news/news.jsx/"*/}
                        {/*       element={<News />} />*/}
                        {/*<Route path="/music/music.jsx"*/}
                        {/*       element={<Music />} />*/}
                        {/*<Route path="/settings/settings.jsx"*/}
                        {/*       element={<Settings />} />*/}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
