import {state, subscribe} from "./Redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {changeTextArreaValue, pushFunc, State, textArreaText} from "./Redux/state"


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement);

export const rerenderEntireTree = (state:State) => {
    root.render (
        <App
            state={state}
            pushFunc={pushFunc}
            textArreaText={textArreaText}
            changeTextArreaValue={changeTextArreaValue}
        />
    );
    reportWebVitals();
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)