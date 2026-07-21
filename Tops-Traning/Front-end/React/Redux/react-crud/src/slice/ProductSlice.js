import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// Get Product
export const getproduct = createAsyncThunk(
    'getproduct', async (data, { rejectWithValue }) => {
        try {
            const res = await axios.get('http://localhost:3000/products')
            toast.success('All Prodcuts show Successfull')
            const result = await res.data
            return result
        } catch (error) {
            return rejectWithValue
        }
    }
)


// Add product

export const addproduct = createAsyncThunk(
    'addproduct', async(data, {rejectWithValue})=> {
        try {
            const res = await axios.post('http://localhost:3000/products',data)
            toast.success('Product Added Successfull')
            const result = await res.data
            return result

        } catch (error) {
            return rejectWithValue
        }
    }
)


// View Product
// export const viewproduct = createAsyncThunk(
//     'viewproduct', async(id, {rejectWithValue}) => {
//         try {
//             const res = await axios.get(`http://localhost:3000/products/${id}`)
//             const result = await res.id
//             return result
//         } catch (error) {
//             return rejectWithValue
//         }
//     }
// )


// Delete Product

export const deleteproduct = createAsyncThunk(
    'deleteproduct', async(id, {rejectWithValue})=> {
        try {
            const res = await axios.delete(`http://localhost:3000/products/${id}`)
            toast.error('Product Deleted Successfull')
            const result = await res.data
            return result

        } catch(error){
            return rejectWithValue(error.message)
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
        // Get Prodcut
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

            // Add Product
            .addCase(addproduct.pending,(state, action) => {
                state.pending = true
            })
            .addCase(addproduct.fulfilled,(state, action) => {
                state.pending = false
                state.products.push(action.payload)
            })
            .addCase(addproduct.rejected,(state, action) => {
                state.pending = false
                state.rejected = action.payload
            })
            
            // Delete Product
            .addCase(deleteproduct.pending,(state, action) => {
                state.pending = true
            })
            .addCase(deleteproduct.fulfilled,(state, action) => {
                state.pending = false
                state.products = state.products.filter((data,index) => data.id !== action.payload.id)
            })
            .addCase(deleteproduct.rejected,(state, action) => {
                state.pending = false
                state.rejected = action.payload
            })
            

    }

})


export const {productPending,productFullField, productRejected} = ProductSlice.actions;

export default ProductSlice.reducer