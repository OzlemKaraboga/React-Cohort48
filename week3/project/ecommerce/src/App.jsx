import { useState, useEffect } from 'react';

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Categories from './components/Categories.jsx';
import ProductList from './components/ProductList.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import Favorites from './components/Favorites.jsx';

import './App.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(false);

  const [errorCategories, setErrorCategories] = useState(false);
  const [errorProducts, setErrorProducts] = useState(false);
  const [errorMessageCategories, setErrorMessageCategories] = useState('');
  const [errorMessageProducts, setErrorMessageProducts] = useState('');

  const fetchCategories = async () => {
    setLoadingCategories(true);
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      setErrorCategories(true);
      setErrorMessageCategories(error.message);
    } finally {
      setLoadingCategories(false);
    }
  };

  const fetchProducts = async (category) => {
    setLoadingProducts(true);
    const url = category
      ? `https://fakestoreapi.com/products/category/${category}`
      : 'https://fakestoreapi.com/products';

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error fetching products');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setErrorProducts(true);
      setErrorMessageProducts(error.message);
    } finally {
      setLoadingProducts(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    fetchProducts(category);
  };
  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory]);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <div className="header">
                <h1 id="page-title">Products</h1>

                <div className="navigation">
                  <ul>
                    <li><Link to="/">Products</Link></li><li><Link to="/Favorites">Favorites</Link></li>
                  </ul>
                </div>
              </div>

              {loadingCategories ? (
                <p>Loading categories...</p>
              ) : errorCategories ? (
                <p>{errorMessageCategories}</p>
              ) : (
                <Categories
                  categories={categories}
                  selectedCategory={selectedCategory}
                  handleCategoryChange={handleCategoryClick}
                />
              )}
              {loadingProducts ? (
                <p>Loading products...</p>
              ) : errorProducts ? (
                <p>{errorMessageProducts}</p>
              ) : (
                <ProductList products={products} />
              )}
            </>
          } />
          <Route path="/Favorites" element={
            <>
              <div className="header">
                <h1>Favorites</h1>

                <div className="navigation">
                  <ul>
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/Favorites">Favorites</Link></li>
                  </ul>
                </div>
              </div>

              {loadingProducts ? (
                <p>Loading products...</p>
              ) : errorProducts ? (
                <p>{errorMessageProducts}</p>
              ) : (
                <Favorites />
              )}
            </>
          } />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
