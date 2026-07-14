import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getproduct = createAsyncThunk(
    'getproduct', async (data, { rejectWithValue }) => {
        try {
            const res = await axios.get('http://localhost:3000/products')
            const result = await res.data
            return result
        } catch (error) {
            return rejectWithValue
        }
    }
)

export const ProductSlice = createSlice({
    name: 'ProductDetails',
    initialState: {
        pending: true,
        products: [],
        rejected: ''
    },
    reducers: {
        productPending: (state, action) => {
            state.pending = true
        },
        productFullField: (state, action) => {
            state.pending = false
            state.products.push(action.payload)
        },
        productRejected: (state, action) => {
            state.pending = false
            state.rejected = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getproduct.pending,(state, action) => {
                state.pending = true
            })
            .addCase(getproduct.fulfilled,(state, action) => {
                state.pending = false
                state.products = action.payload
            })
            .addCase(getproduct.rejected,(state, action) => {
                state.pending = false
                state.rejected = action.payload
            })
    }

})


export const {productPending,productFullField, productRejected} = ProductSlice.actions;

export default ProductSlice.reducer