import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import { shopsReducer } from "./shopSlice";
import { ordersReducer } from "./orderSlice";
import { cartReducer } from "./cartSlice";



const persistConfig = {
    key: 'rootsss',
    storage,
};

export const store = configureStore({
    reducer: {
        shops: shopsReducer,
        orders: ordersReducer,
        cart: persistReducer(persistConfig, cartReducer)      
    },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),   
});

export const persistor = persistStore(store);