import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProductDetails = createAsyncThunk(
    "productdetails",
    async () => {
        const url = 'https://api.unsplash.com/photos?page=1&client_id=fIv9i1dEOurkFrlwG0TTX6GzOIy1Czkpeun2la8yAEQ'
        const res = await axios.get(url)
        return res.data
    }
)


const initialState = {
    productDetails: [],
    productDetailsServer: []
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: {
        [getProductDetails.fulfilled]: (state, action) => {
            state.productDetails = action.payload
            console.log(action.payload)
        },
    }
})

const { reducer } = productSlice
export default reducer