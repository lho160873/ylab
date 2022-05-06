import { combineReducers, createStore } from "redux";
import filtrReducer from './filtr-reducer';
import usersReducer from './users-reducer';
import profileReducer from './profile-reducer';

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        filtrPage: filtrReducer,
        usersPage: usersReducer
    }
);

let store = createStore(reducers);

window.store = store;

export default store;