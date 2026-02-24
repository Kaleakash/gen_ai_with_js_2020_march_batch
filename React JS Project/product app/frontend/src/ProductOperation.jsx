import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductOperation.css';

const API_URL = 'http://localhost:3000/products';

const initialProduct = {
  pname: '',
  price: '',
  qty: '',
  imageUrl: ''
};

function ProductOperation() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(initialProduct);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(API_URL);
      setProducts(res.data);
    } catch (err) {
      alert('Failed to fetch products');
    }
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!product.pname || !product.price || !product.qty || !product.imageUrl) {
      alert('All fields are required');
      return;
    }
    console.log('Submitting product:', product);
    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, product);
        setEditingId(null);
      } else {
        await axios.post(API_URL, product);
      }
      setProduct(initialProduct);
      fetchProducts();
    } catch (err) {
      alert('Failed to save product');
    }
  };

  const handleEdit = (prod) => {
    setProduct(prod);
    setEditingId(prod.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this product?')) return;
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchProducts();
    } catch (err) {
      alert('Failed to delete product');
    }
  };

  return (
    <div className="product-operation-container">
      <h2>Product Operations</h2>
      <form className="product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="pname"
          placeholder="Product Name"
          value={product.pname}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
        />
        <input
          type="number"
          name="qty"
          placeholder="Quantity"
          value={product.qty}
          onChange={handleChange}
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={product.imageUrl}
          onChange={handleChange}
        />
        <button type="submit">{editingId ? 'Update' : 'Add'} Product</button>
        {editingId && (
          <button type="button" onClick={() => { setProduct(initialProduct); setEditingId(null); }}>
            Cancel
          </button>
        )}
      </form>
      <div className="product-list">
        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((prod) => (
                <tr key={prod.id}>
                  <td><img src={prod.imageUrl} alt={prod.pname} className="product-img" /></td>
                  <td>{prod.pname}</td>
                  <td>{prod.price}</td>
                  <td>{prod.qty}</td>
                  <td>
                    <button onClick={() => handleEdit(prod)}>Edit</button>
                    <button onClick={() => handleDelete(prod.id)} className="delete-btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default ProductOperation;
