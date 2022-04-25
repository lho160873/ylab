import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import store from "./data/state";
import "./index.css";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>, document.getElementById('root'));
}

const servicesFromStorage = localStorage.getItem("services");
if (servicesFromStorage != null) {
    store.setServices(JSON.parse(servicesFromStorage));
    console.log(store.getState().services);
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree); //подписываемся на рендер

