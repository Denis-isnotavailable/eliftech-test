import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://eliftech-test-api.vercel.app";


// GET SHOPS
export const getShops = createAsyncThunk("shops/getShops", async (_, thunkAPI) => {
    try {        
        const { data } = await axios.get("/api/shop");    

        return data.data;
    } catch (e) {
        console.error(e.message);
        return thunkAPI.rejectWithValue(e.message);
    }
});

// GET ORDERS
export const getOrders = createAsyncThunk("orders/getOrders", async (_, thunkAPI) => {
    try {        
        const { data } = await axios.get("/api/order");    

        return data.data;
    } catch (e) {
        console.error(e.message);
        return thunkAPI.rejectWithValue(e.message);
    }
});

// ADD ORDER
export const addOrder = createAsyncThunk("orders/addOrder", async ({ requisites, dishList }, thunkAPI) => {
    try {        
        const { data } = await axios.post("/api/order", { requisites, dishList });    

        return data.data;
    } catch (e) {
        console.error(e.message);
        return thunkAPI.rejectWithValue(e.message);
    }
});

// SET CURRENT SHOP ID TO CART
export const setShopId = createAsyncThunk("cart/setShopId", (data) => {
    return data;
});

// SET DISHES TO CART
export const setDishes = createAsyncThunk("cart/setDishes", (data) => {
    return data;
});

// REMOVE DISH FROM CART
export const removeDish = createAsyncThunk("cart/removeDish", (id) => {
    return id;
});

// CHANGE QUANTITY
export const changeDishQuantity = createAsyncThunk("cart/changeDishQuantity", (data) => {
    return data;
});

// CLEAN THE CART
export const cleanCart = createAsyncThunk("cart/cleanCart", () => {
});
