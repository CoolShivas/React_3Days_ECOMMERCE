import { createSlice } from "@reduxjs/toolkit";

const INITIAL_CART = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_CART,
    reducers: {
        setAddToCartItems: (state, action) => {
            state.cartItems.push(action.payload);
        },
    }
});

export const { setAddToCartItems } = cartSlice.actions;

export default cartSlice;