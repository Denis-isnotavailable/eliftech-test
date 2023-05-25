import { createSlice } from "@reduxjs/toolkit";
import { getOrders, addOrder } from "./operations";



const initialState = {
    orders: [],
    isOrdersLoading: false,
    error: null
};

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getOrders.pending, (state) => {                
                state.isOrdersLoading = true;
            })
            .addCase(getOrders.fulfilled, (state, action) => {
                state.orders = action.payload;                    
                state.isOrdersLoading = false;
                state.error = null;                
            })
            .addCase(getOrders.rejected, (state, action) => {                
                state.isOrdersLoading = false;
                state.error = action.payload;
            })
            .addCase(addOrder.pending, (state) => {                
                state.isOrdersLoading = true;
            })
            .addCase(addOrder.fulfilled, (state, action) => {
                state.orders.push(action.payload);                    
                state.isOrdersLoading = false;
                state.error = null;                
            })
            .addCase(addOrder.rejected, (state, action) => {                
                state.isOrdersLoading = false;
                state.error = action.payload;
            })
    }
});

export const ordersReducer = ordersSlice.reducer;