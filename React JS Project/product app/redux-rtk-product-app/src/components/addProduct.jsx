import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../slice/productSlice";

const AddProduct = () => {
	const dispatch = useDispatch();
	const { loading, error } = useSelector((state) => state.productReducer);

	const [form, setForm] = useState({
		pname: "",
		price: "",
		qty: "",
		imageUrl: ""
	});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Convert price and qty to numbers
		const product = {
			...form,
			price: Number(form.price),
			qty: Number(form.qty)
		};
		dispatch(addProduct(product));
		setForm({ pname: "", price: "", qty: "", imageUrl: "" });
	};

	return (
		<div>
			<h2>Add Product</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Name:</label>
					<input name="pname" value={form.pname} onChange={handleChange} required />
				</div>
				<div>
					<label>Price:</label>
					<input name="price" type="number" value={form.price} onChange={handleChange} required />
				</div>
				<div>
					<label>Qty:</label>
					<input name="qty" type="number" value={form.qty} onChange={handleChange} required />
				</div>
				<div>
					<label>Image URL:</label>
					<input name="imageUrl" value={form.imageUrl} onChange={handleChange} />
				</div>
				<button type="submit" disabled={loading}>Add Product</button>
			</form>
			{error && <div style={{ color: "red" }}>Error: {error}</div>}
		</div>
	);
};

export default AddProduct;
