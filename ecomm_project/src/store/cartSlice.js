import { createSlice } from "@reduxjs/toolkit";

const INITIAL_CART = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_CART,
    reducers: {
        setAddToCartItems: (state, action) => {
            // // state.cartItems.push(action.payload);
            // const tempProducts = { ...action.payload, cartQty: 1 };
            // // Also passing the Qty in the cartItems array i.e, not mentioned previously in the hard coded array;
            // // Therefore, whenever the user click on add to cart btn the quantity is also mentioned;
            // state.cartItems.push(tempProducts);
            const itemIndex = state.cartItems.findIndex((zrr) => zrr.id === action.payload.id)
            // // Searching for the same index;
            if (itemIndex >= 0) {// // if itemIndex greater than 0 then then increase it's quantity by one;
                state.cartItems[itemIndex].cartQty += 1;
            }
            else {// // else just push the items in the array with the initial quantity i.e, 1;
                const tempProducts = { ...action.payload, cartQty: 1 };
                state.cartItems.push(tempProducts);
            }
        },
    }
});

export const { setAddToCartItems } = cartSlice.actions;

export default cartSlice;