import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../slice/productSlice";

const ViewProducts = ({ onEdit }) => {
	const dispatch = useDispatch();
	const { products, loading, error } = useSelector((state) => state.productReducer);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div>
			<h2>Product List</h2>
			<table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse" }}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Price</th>
						<th>Qty</th>
						<th>Image</th>
						<th>Edit</th>
					</tr>
				</thead>
				<tbody>
					{products.map((prod) => (
						<tr key={prod.id}>
							<td>{prod.id}</td>
							<td>{prod.pname}</td>
							<td>{prod.price}</td>
							<td>{prod.qty}</td>
							<td>
								{prod.imageUrl ? (
									<img src={prod.imageUrl} alt={prod.pname} width="60" />
								) : (
									"No Image"
								)}
							</td>
							<td>
								<button onClick={() => onEdit(prod)}>Edit</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ViewProducts;
