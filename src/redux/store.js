import { configureStore } from "@reduxjs/toolkit";
import NavbarSlice from './slices/NavbarSlice';

export const store = configureStore({
    reducer: {
        NavbarSlice
    }
});