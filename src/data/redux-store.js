import { combineReducers, createStore } from "redux";
import filtrReducer from './filtr-reducer';

let reducers = combineReducers(
    { filtrPage: filtrReducer }
);

let store = createStore(reducers);

window.store = store;

export default store;