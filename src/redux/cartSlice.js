import { createSlice } from "@reduxjs/toolkit";
import { setShopId, setDishes, removeDish, changeDishQuantity, cleanCart } from "./operations";


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
            .addCase(removeDish.fulfilled, (state, action) => { 
                const newDishesList = state.dishes.filter(({ _id }) => _id !== action.payload);
                state.dishes = newDishesList;
            })    
            .addCase(changeDishQuantity.fulfilled, (state, action) => { 
                const newDishesList = state.dishes.reduce((acc, dish) => {
                    if (dish._id === action.payload.id) dish.quantity = action.payload.quantity;
                    acc.push(dish)
                    return acc;
                },[])
                state.dishes = newDishesList;
            })
            .addCase(cleanCart.fulfilled, (state) => { 
                state.dishes = [];
                state.shopId = "";
            }) 
    }
});

export const cartReducer = cartSlice.reducer;