import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    news: []
}

const getAllNews = createAsyncThunk('news/getAllNews', async () => {
    const response = await axios.get('https://zaqatalaxidmet-3c2b32e22185.herokuapp.com/news')
    return response.data;
})

const newsSlice = createSlice({
    name: 'allNews',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getAllNews.pending, (state) => {
            console.log("Fetching services...");
        }).addCase(getAllNews.fulfilled, (state, action) => {
            state.services = action.payload;
        }).addCase(getAllNews.rejected, (state, action) => {
            console.error("Error fetching services:", action.error);
        });
    }
});

export { getAllNews };

export default newsSlice.reducer;