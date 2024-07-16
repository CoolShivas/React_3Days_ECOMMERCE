import productSlice from "./productSlice";
import authSlice from "./authSlice";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// const INITIAL_AUTH = {
//     isUserLoggedIn: false,
//     userToken: "",
//     userId: null,
// };


// const authSlice = createSlice({
//     name: "authentication",
//     initialState: INITIAL_AUTH,
//     reducers: {
//         setLogIn: (state, action) => {
//             state.isUserLoggedIn = true;
//             state.userToken = action.payload;
//             state.userId = action.payload;
//         },
//         setLogOut: (state, action) => {
//             state.isUserLoggedIn = false;
//             state.userToken = action.payload;
//             state.userId = action.payload;
//         },
//     }
// });

///*************************************************************************************** */

// const INITIAL_VALUE = {
//     itemArr: [],
//     dataItem: [],
// };

// const productSlice = createSlice({
//     name: "eCommerce",
//     initialState: INITIAL_VALUE,
//     reducers: {
//         setItemsArr: (state, action) => {
//             state.itemArr = action.payload;
//         },
//         setDataItem: (state, action) => {
//             state.dataItem = action.payload;
//         },
//         setDelete: (state, action) => {
//             state.dataItem.filter((arr) => {
//                 arr.id !== action.payload
//             })
//         },
//     }
// });


const reduxStore = configureStore({
    reducer: {
        production: productSlice.reducer,
        authentication: authSlice.reducer,
    }
});


export default reduxStore;