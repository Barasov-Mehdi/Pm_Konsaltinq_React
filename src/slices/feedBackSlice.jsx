// slices/feedBackSlice.jsx
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    feedbacks: [],
};

const postFeedBack = createAsyncThunk('feedbacks/postFeedBack', async (feedback) => {
    const response = await axios.post('https://zaqatalaxidmet-3c2b32e22185.herokuapp.com/feedback', feedback, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data;
});

const feedBackSlice = createSlice({
    name: "feedback",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(postFeedBack.pending, (state) => {
            console.log("Gönderiliyor...");
        })
        .addCase(postFeedBack.fulfilled, (state, action) => {
            state.feedbacks.push(action.payload); // Yeni feedback'i state'e ekle
        })
        .addCase(postFeedBack.rejected, (state, action) => {
            console.error("Hata oluştu:", action.error);
        });
    }
});

export { postFeedBack };
export default feedBackSlice.reducer;
