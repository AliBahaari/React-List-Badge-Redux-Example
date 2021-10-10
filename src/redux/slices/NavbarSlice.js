import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dummy: 26
}

const navbarSlice = createSlice({
    name: 'navbarSlice',
    initialState,
    reducers: {

        decrementBadge: (state) => {
            state.dummy -= 1;
        }

    }
});

export const { decrementBadge } = navbarSlice.actions;
export default navbarSlice.reducer;