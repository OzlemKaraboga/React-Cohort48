import React, { useState } from 'react';
import './App.css';
import categories from './fake-data/all-categories';
import products from './fake-data/all-products';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => {
      return `FAKE: ${product.category}` === selectedCategory;
    })
    : products;

  return (
    <div className="App">
      <div>
        <h1 id="page-title">Products</h1>
      </div>
      <div className='main'>
        <CategoryList categories={categories} selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange} />
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
}

export default App;