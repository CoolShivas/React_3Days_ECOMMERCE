import { createSlice } from "@reduxjs/toolkit";

const INITIAL_VALUE = {
    itemArr: [],
    dataItem: [],
};

const productSlice = createSlice({
    name: "eCommerce",
    initialState: INITIAL_VALUE,
    reducers: {
        setItemsArr: (state, action) => {
            state.itemArr = action.payload;
        },
        setDataItem: (state, action) => {
            state.dataItem = action.payload;
        },
        setDelete: (state, action) => {
            state.dataItem.filter((arr) => {
                arr.id !== action.payload
            })
        },
    }
});

export const { setItemsArr, setDataItem, setDelete } = productSlice.actions;

export default productSlice;