import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/TodoSlice";
import modalReducer from "../features/modal/ModalSlice";

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        modal: modalReducer
    },
});
