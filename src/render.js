import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { addFiltr } from './data/state';
import { setIdService } from './data/state';
import { getIdService } from './data/state';


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addFiltr={addFiltr} setIdService={setIdService} getIdService={getIdService}/>
        </BrowserRouter>, document.getElementById('root'));
}