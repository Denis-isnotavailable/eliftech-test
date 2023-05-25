import { createSlice } from "@reduxjs/toolkit";
import { getShops } from "./operations";



const initialState = {
    shops: [],
    isLoading: false,
    error: null
};

const shopsSlice = createSlice({
    name: 'shops',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getShops.pending, (state) => {                
                state.isLoading = true;
            })
            .addCase(getShops.fulfilled, (state, action) => {
                state.shops = action.payload;                    
                state.isLoading = false;
                state.error = null;                
            })
            .addCase(getShops.rejected, (state, action) => {                
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export const shopsReducer = shopsSlice.reducer;