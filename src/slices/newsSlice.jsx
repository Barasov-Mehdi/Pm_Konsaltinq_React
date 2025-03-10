import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    news: []  // Initialize `news` as an empty array
}

const getAllNews = createAsyncThunk('news/getAllNews', async () => {
    const response = await axios.get('https://zaqatalaxidmet-3c2b32e22185.herokuapp.com/news/api');
    return response.data;  // This should return the news data
})

const newsSlice = createSlice({
    name: 'allNews',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getAllNews.pending, (state) => {
            console.log("Fetching news...");
        })
            .addCase(getAllNews.fulfilled, (state, action) => {
                state.news = action.payload;  // Correctly assign to `state.news`
            })
            .addCase(getAllNews.rejected, (state, action) => {
                console.error("Error fetching news:", action.error);
            });
    }
});

export { getAllNews };
export default newsSlice.reducer;