import { createSlice } from "@reduxjs/toolkit";
import { setShopId, setDishes } from "./operations";


const initialState = {    
    shopId: "",
    dishes: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers: (builder) => {
        builder            
            .addCase(setShopId.fulfilled, (state, action) => {               
                state.shopId = action.payload;
            })
            .addCase(setDishes.fulfilled, (state, action) => {               
                state.dishes.push(action.payload);
            })
    }
});

export const cartReducer = cartSlice.reducer;