import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';


const ProductDetail = () => {
    const { id } = useParams();
    const { data: product, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`);

    if (loading) return <p>...Loading info about the product...</p>;
    if (error) return <p>{error}</p>;

    return (

        <div>
            <h1 className='product-detail-title'>{product.title}</h1>
            <div className="info-container">
                <p className='product-description'>{product.description}</p>
                <img className="product-detail-img" src={product.image} alt={product.title} />
            </div>
        </div>

    );
}

export default ProductDetail;