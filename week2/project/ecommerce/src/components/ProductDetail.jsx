import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    const fetchProduct = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
            setError(null);
        } catch (error) {
            console.error('Error fetching product: ', error);
            setError(error);
        }
    }

    useEffect(() => {
        fetchProduct();
    }, [id]);

    return (
        error ? <h3>Product fetch error occurred</h3> :
            product ? (
                <div>
                    <h1 className='product-detail-title'>{product.title}</h1>
                    <div className="info-container">
                        <p className='product-description'>{product.description}</p>
                        <img className="product-detail-img" src={product.image} alt={product.name} />
                    </div>
                </div>
            ) : <h1>Loading Product!</h1>
    );
}

export default ProductDetail;