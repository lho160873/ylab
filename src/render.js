import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { addFiltr } from './data/state';



export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addFiltr={addFiltr} />
        </BrowserRouter>, document.getElementById('root'));
}