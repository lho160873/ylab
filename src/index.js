import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
//import store from "./data/store";
import store from "./data/redux-store";
import "./index.css";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());

//store.subscribe(rerenderEntireTree); //подписываемся на рендер

//подписываемся на рендер
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

