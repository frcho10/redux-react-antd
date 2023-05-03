import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    message: "",
    isLoading: false,
    error: "",
}

export const dolarPeso = createAsyncThunk(
    'asyncReducer/dolarPeso',
    async (dolar, thunkAPI) => {
        try{
            const response = await axios.get(`https://api.frankfurter.app/latest?amount=${dolar}&from=USD&to=MXN`);
    
            return response.data

        }catch(error){
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    });

export const pesoDolar = createAsyncThunk(
    'asyncReducer/pesoDolar',
    async (peso, thunkAPI) => {
        try{
            const response = await axios.get(`https://api.frankfurter.app/latest?amount=${peso}&from=MXN&to=USD`);
    
            return response.data

        }catch(error){
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    });

export const asyncReducer = createSlice({
    name: "asyncReducer",
    initialState,
    reducers: {
        clearInfo: (state) => {
            state.message ="";
            state.isLoading= false;
            state.error= "";
        }
    },
    extraReducers: (builder) => {
        builder.addCase(dolarPeso.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(dolarPeso.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = "";
            state.message = action.payload.rates.MXN;
        });
        builder.addCase(dolarPeso.rejected, (state, action) => {
            state.isLoading = false;
            state.message = "";
            state.error = action.payload;
            // state.error = action.error.message;
        });

        builder.addCase(pesoDolar.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(pesoDolar.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = "";
            state.message = action.payload.rates.USD;
        });
        builder.addCase(pesoDolar.rejected, (state, action) => {
            state.isLoading = false;
            state.message = "";
            state.error = action.payload;
            // state.error = action.error.message;
        });
    }
});



export const { clearInfo } = asyncReducer.actions;
export default asyncReducer.reducer;