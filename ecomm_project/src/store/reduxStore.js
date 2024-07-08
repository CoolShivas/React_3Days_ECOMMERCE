import {configureStore, createSlice} from "@reduxjs/toolkit";

const INITIAL_VALUE = {
    itemArr : [],
    dataItem :[],
};

const productSlice = createSlice({
 name : "eCommerce",
 initialState : INITIAL_VALUE,
 reducers : {
    setItemsArr : (state, action) => {
        state.itemArr = action.payload;
    },
    setDataItem : (state, action) =>{
        state.dataItem = action.payload;
    },
 }
});


const reduxStore = configureStore({
reducer : {
    production : productSlice.reducer,
}
});

export const {setItemsArr, setDataItem } = productSlice.actions;

export default reduxStore;