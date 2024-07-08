import {configureStore, createSlice} from "@reduxjs/toolkit";

const INITIAL_VALUE = {
    itemArr : [],
};

const productSlice = createSlice({
 name : "eCommerce",
 initialState : INITIAL_VALUE,
 reducers : {
    setItemsArr : (state, action) => {
        state.itemArr = action.payload;
    }
 }
});


const reduxStore = configureStore({
reducer : {
    production : productSlice.reducer,
}
});

export const {setItemsArr} = productSlice.actions;

export default reduxStore;