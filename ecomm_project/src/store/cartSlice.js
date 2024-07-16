import { toast } from "react-toastify";
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_CART = {
    cartItems: localStorage.getItem("Save-cartItems") ? JSON.parse(localStorage.getItem("Save-cartItems")) : [],
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
                toast.info(`increased ${state.cartItems[itemIndex].name} quantity in your cart`, {
                    position: "bottom-left",
                })
            }
            else {// // else just push the items in the array with the initial quantity i.e, 1;
                const tempProducts = { ...action.payload, cartQty: 1 };
                state.cartItems.push(tempProducts);
                toast.success(`added a new product ${action.payload.name} to your cart`, {
                    position: "bottom-left",
                })
            }
            localStorage.setItem("Save-cartItems", JSON.stringify(state.cartItems));
        },
        setRemoveFromCart: (state, action) => {
            const nextCartItem = state.cartItems.filter((yrr) => yrr.id !== action.payload.id);
            state.cartItems = nextCartItem;
            localStorage.setItem("Save-cartItems", JSON.stringify(state.cartItems));
            toast.error(`${action.payload.name} removed from cart`, {
                position: "bottom-left",
            })
        },
    }
});

export const { setAddToCartItems, setRemoveFromCart } = cartSlice.actions;

export default cartSlice;