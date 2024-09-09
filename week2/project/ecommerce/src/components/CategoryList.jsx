import React from 'react';

const CategoryList = ({ categories, selectedCategory, handleCategoryChange }) => {
    return (
        <div className="categories">
            {categories.length !== 0 ? (
                categories.map((category) => (
                    <div key={category} className={'category-item ' + (category === selectedCategory ? 'category-selected' : '')}>
                        <h3 onClick={() => handleCategoryChange(category)}>{category}</h3>
                    </div>
                ))
            ) : (
                <h3>Loading Categories!</h3>
            )}
        </div>
    );
}

export default CategoryList;