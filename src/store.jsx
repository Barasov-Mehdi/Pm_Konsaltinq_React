import { configureStore } from '@reduxjs/toolkit'
import productSlice from './slices/productSlice'
import feedBackSlice from './slices/feedBackSlice'
import newsSlice from './slices/newsSlice'
export const store = configureStore({
    reducer: {
        products: productSlice,
        feedback: feedBackSlice,
        allNews: newsSlice
    },
});

