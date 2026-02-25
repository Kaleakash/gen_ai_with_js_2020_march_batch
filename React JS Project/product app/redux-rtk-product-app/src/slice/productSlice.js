import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/products";

// Thunks for async REST API actions
export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	async (_, thunkAPI) => {
		const response = await axios.get(API_URL);
		return response.data;
	}
);

export const addProduct = createAsyncThunk(
	"products/addProduct",
	async (product, thunkAPI) => {
		const response = await axios.post(API_URL, product);
		return response.data;
	}
);

export const updateProduct = createAsyncThunk(
	"products/updateProduct",
	async (product, thunkAPI) => {
		const response = await axios.put(`${API_URL}/${product.id}`, product);
		return response.data;
	}
);

export const deleteProduct = createAsyncThunk(
	"products/deleteProduct",
	async (id, thunkAPI) => {
		await axios.delete(`${API_URL}/${id}`);
		return id;
	}
);

const initialState = {
	products: [],
	loading: false,
	error: null,
};

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {},       // in memory actions if needed
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.loading = false;
				state.products = action.payload;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			.addCase(addProduct.fulfilled, (state, action) => {
				state.products.push(action.payload);
			})
			.addCase(updateProduct.fulfilled, (state, action) => {
				const idx = state.products.findIndex(p => p.id === action.payload.id);
				if (idx !== -1) state.products[idx] = action.payload;
			})
			.addCase(deleteProduct.fulfilled, (state, action) => {
				state.products = state.products.filter(p => p.id !== action.payload);
			});
	},
});

export default productSlice.reducer;
