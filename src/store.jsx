import { configureStore } from '@reduxjs/toolkit'
import productSlice from './slices/productSlice'
import feedBackSlice from './slices/feedBackSlice'
export const store = configureStore({
    reducer: {
        products: productSlice,
        feedback: feedBackSlice, 
    },
});

