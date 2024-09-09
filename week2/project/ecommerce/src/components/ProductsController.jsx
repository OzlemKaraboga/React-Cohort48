import { useState, useEffect } from 'react';
import ProductList from './ProductList';

const productsApiUrl = 'https://fakestoreapi.com/products';

const ProductsController = ({ selectedCategory }) => {
    const [products, setProducts] = useState([]);
    const [errorFetch, setErrorFetch] = useState(null);

    const fetchProducts = async () => {
        try {
            if (!selectedCategory) {
                const response = await fetch(productsApiUrl);
                const data = await response.json();
                setProducts(data);
                setErrorFetch(null);
            } else {
                const response = await fetch(`${productsApiUrl}/category/${selectedCategory}`);
                const data = await response.json();
                setProducts(data);
                setErrorFetch(null);
            }

        } catch (error) {
            console.error('Error fetching products: ', error);
            setErrorFetch(error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [selectedCategory]);

    return (
        errorFetch ? <h1>There was an error fetching products</h1> :
            <ProductList products={products} selectedCategory={selectedCategory} />
    );
}

export default ProductsController;