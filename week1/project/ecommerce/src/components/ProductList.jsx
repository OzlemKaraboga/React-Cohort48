import React from "react";

const ProductList = ({ products }) => {
    return (
        <ul className="products">
            {products.map(({ id, image, name, title }) => (
                <li key={id} className="product-item">
                    <div className="product">
                        <img className="product-img" src={image} alt={name} />
                        <span>{title}</span>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default ProductList;