import { Link } from 'react-router-dom';
import { useFavorites } from './FavoritesContext';

import heartSolid from '../assets/heart-solid.svg';

const Favorites = () => {
    const { favorites, productsData, removeFavorite } = useFavorites();

    const handleFavoriteClick = (id) => {
        removeFavorite(id);
    };

    return (
        <ul className="products">
            {favorites.length === 0 ? (
                <p>You haven't chosen any favourites yet!</p>
            ) : (
                favorites.map((id) => (
                    <li key={id} className="product-item">
                        <div className="favorite-icon" onClick={() => handleFavoriteClick(id)}>
                            <img className="heart-icon" src={heartSolid} alt="Remove from favorites" />
                        </div>

                        {productsData[id] ? (
                            <Link to={`/product/${id}`}>
                                <div className="product">
                                    <img className="product-img" src={productsData[id].image} alt={productsData[id].title} />
                                    <span title={productsData[id].title}>{productsData[id].title}</span>
                                </div>
                            </Link>
                        ) : (
                            <p>Product data not available</p>
                        )}
                    </li>
                ))
            )}
        </ul>
    );
};

export default Favorites;