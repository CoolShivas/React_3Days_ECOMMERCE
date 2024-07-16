import { createSlice } from "@reduxjs/toolkit";

const INITIAL_AUTH = {
    isUserLoggedIn: false,
    userToken: "",
    userId: null,
};


const authSlice = createSlice({
    name: "authentication",
    initialState: INITIAL_AUTH,
    reducers: {
        setLogIn: (state, action) => {
            state.isUserLoggedIn = true;
            state.userToken = action.payload;
            state.userId = action.payload;
        },
        setLogOut: (state, action) => {
            state.isUserLoggedIn = false;
            state.userToken = action.payload;
            state.userId = action.payload;
        },
    }
});

export const { setLogIn, setLogOut } = authSlice.actions;

export default authSlice;