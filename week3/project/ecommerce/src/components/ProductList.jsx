import { Link } from 'react-router-dom';
import { useFavorites } from '../contexts/FavoritesContext';
import useFetch from '../hooks/useFetch';

import heartSolid from '../assets/heart-solid.svg';
import heartRegular from '../assets/heart-regular.svg';

const ProductList = ({ selectedCategory, products }) => {
    const { favorites, addFavorite, removeFavorite } = useFavorites();
    const url = selectedCategory
        ? `https://fakestoreapi.com/products/category/${selectedCategory}`
        : 'https://fakestoreapi.com/products';

    const { loading, error } = useFetch(url);

    const isFavorite = (id) => favorites.includes(id);

    const handleFavoriteClick = (product) => {
        if (isFavorite(product.id)) {
            removeFavorite(product.id);
        } else {
            addFavorite(product.id, product);
        }
    };

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>{error}</p>;

    return (
        <ul className="products">
            {products.map((product) => (
                <li key={product.id} className="product-item">
                    <div
                        className="favorite-icon"
                        onClick={() => handleFavoriteClick(product)}
                    >
                        <img
                            src={isFavorite(product.id) ? heartSolid : heartRegular}
                            alt={
                                isFavorite(product.id)
                                    ? 'Remove from favorites'
                                    : 'Add to favorites'
                            }
                            className="heart-icon"
                        />
                    </div>
                    <Link to={`/product/${product.id}`}>
                        <div className="product">
                            <img
                                className="product-img"
                                src={product.image}
                                alt={product.title}
                            />
                            <span title={product.title}>{product.title}</span>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default ProductList;
