import { configureStore, combineReducers } from "@reduxjs/toolkit";
import usuarioReducer from './redux/usuarioReduxToolkit'
import showInfoReducer from './redux/showInfoDucks'
import asyncReducer from "./redux/asyncReduxToolkit";
import changeUserReducer from "./redux/asyncReduxConvencional";

import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['changeUserReducer'],
}

const rootReducer = combineReducers({
    usuario: usuarioReducer,
    showInfo: showInfoReducer,
    asyncAction: asyncReducer,
    changeUserReducer: changeUserReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);



export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]

});