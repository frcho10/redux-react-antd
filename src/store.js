import { configureStore } from "@reduxjs/toolkit";
import usuarioReducer from './redux/usuarioReduxToolkit'
import showInfoReducer from './redux/showInfoDucks'
import asyncReducer from "./redux/asyncReduxToolkit";

export const store = configureStore({
    reducer: {
        usuario: usuarioReducer,
        showInfo: showInfoReducer,
        asyncAction: asyncReducer,
    }

});