import { useState, useEffect } from 'react';
import CategoryList from './CategoryList';
import ProductsController from './ProductsController';

const categoryApiUrl = 'https://fakestoreapi.com/products/categories';

const CategoryController = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [error, setError] = useState(null);

    const fetchCategories = async () => {
        try {
            const response = await fetch(categoryApiUrl);
            const data = await response.json();
            setCategories(data);
            setError(null);
        } catch (error) {
            console.error('Error fetching categories: ', error);
            setError(error);
        }
    }

    const handleCategoryChange = (category) => {
        setSelectedCategory(category)
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div>
            <h1 id="page-title">Products</h1>
            {error ? <h3>An error occurred while loading categories</h3> :
                <>
                    <CategoryList categories={categories} selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange} />
                    <ProductsController selectedCategory={selectedCategory} />
                </>
            }
        </div>
    );
}

export default CategoryController;