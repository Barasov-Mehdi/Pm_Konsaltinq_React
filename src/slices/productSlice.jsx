import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    services: []
};

const getAllServices = createAsyncThunk('services/getAllServices', async () => {
    const response = await axios.get('https://zaqatalaxidmet-3c2b32e22185.herokuapp.com/services/getAllServices');
    return response.data; 
});

const productSlice = createSlice({
    name: "products", 
    initialState, 
    reducers: {}, 

    extraReducers: (builder) => {
        builder
            .addCase(getAllServices.pending, (state) => {
                console.log("Fetching services...");
            })
            .addCase(getAllServices.fulfilled, (state, action) => {
                state.services = action.payload;
            })
            .addCase(getAllServices.rejected, (state, action) => {
                console.error("Error fetching services:", action.error);
            });
    }
});

export { getAllServices }; 
export default productSlice.reducer;
