import './App.css';
import AddProduct from './components/addProduct';
import UpdateProduct from './components/updateProduct';
import ViewProducts from './components/viewProducts';
import './ProductStyles.css';
import React, { useState } from 'react';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEdit = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseUpdate = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="app-container">
      <h2>Product Crud Operation using RTK</h2>
      <AddProduct />
      {selectedProduct && (
        <UpdateProduct product={selectedProduct} onClose={handleCloseUpdate} />
      )}
      <ViewProducts onEdit={handleEdit} />
    </div>
  );
}

export default App;
