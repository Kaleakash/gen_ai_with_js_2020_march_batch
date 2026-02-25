import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../slice/productSlice";

const UpdateProduct = ({ product }) => {
	const dispatch = useDispatch();
	const { loading, error, products } = useSelector((state) => state.productReducer);

	const [form, setForm] = useState({
		id: product?.id || "",
		pname: product?.pname || "",
		price: product?.price || "",
		qty: product?.qty || "",
		imageUrl: product?.imageUrl || ""
	});
	const [disabled, setDisabled] = useState(false);

	useEffect(() => {
		// If the product in products matches the form and loading is false, consider update complete
		if (!loading && products.some(p => p.id === form.id && p.pname === form.pname && p.price === Number(form.price) && p.qty === Number(form.qty) && p.imageUrl === form.imageUrl)) {
			setDisabled(true);
		}
	}, [loading, products, form]);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Convert price and qty to numbers
		const updatedProduct = {
			...form,
			price: Number(form.price),
			qty: Number(form.qty)
		};
		dispatch(updateProduct(updatedProduct));
	};

	return (
		<div>
			<h2>Update Product</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Name:</label>
					<input name="pname" value={form.pname} onChange={handleChange} required disabled={disabled} />
				</div>
				<div>
					<label>Price:</label>
					<input name="price" type="number" value={form.price} onChange={handleChange} required disabled={disabled} />
				</div>
				<div>
					<label>Qty:</label>
					<input name="qty" type="number" value={form.qty} onChange={handleChange} required disabled={disabled} />
				</div>
				<div>
					<label>Image URL:</label>
					<input name="imageUrl" value={form.imageUrl} onChange={handleChange} disabled={disabled} />
				</div>
				<button type="submit" disabled={loading || disabled}>Update Product</button>
			</form>
			{disabled && <div style={{ color: "green" }}>Product updated successfully!</div>}
			{error && <div style={{ color: "red" }}>Error: {error}</div>}
		</div>
	);
};

export default UpdateProduct;
