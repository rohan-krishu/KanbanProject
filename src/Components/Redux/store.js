import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './TodoSlice';
import cardReducer from './CardSlice';

const store = configureStore({
    reducer:{
        todo: todoReducer,
        card: cardReducer
    }
});


export default store;