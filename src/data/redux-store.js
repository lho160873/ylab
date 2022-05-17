import { applyMiddleware, combineReducers, createStore } from "redux";
import filtrReducer from './filtr-reducer';
import usersReducer from './users-reducer';
import profileReducer from './profile-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from "redux-thunk"


let reducers = combineReducers(
    {
        profilePage: profileReducer,
        filtrPage: filtrReducer,
        usersPage: usersReducer,
        auth: authReducer
    }
);

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;