import { createSlice } from "@reduxjs/toolkit";

const INITIAL_CART = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_CART,
    reducers: {
        setAddToCartItems: (state, action) => {
            // state.cartItems.push(action.payload);
            const tempProducts = { ...action.payload, cartQty: 1 };
            // Also passing the Qty in the cartItems array i.e, not mentioned previously in the hard coded array;
            // Therefore, whenever the user click on add to cart btn the quantity is also mentioned;
            state.cartItems.push(tempProducts);
        },
    }
});

export const { setAddToCartItems } = cartSlice.actions;

export default cartSlice;