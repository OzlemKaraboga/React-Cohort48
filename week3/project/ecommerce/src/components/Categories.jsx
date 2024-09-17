const Categories = ({ categories, selectedCategory, handleCategoryChange }) => {
    return (
        <div className="categories">
            {categories.map((category) => (
                <div
                    key={category}
                    className={`category-item ${category === selectedCategory ? 'category-selected' : ''}`}
                    onClick={() => handleCategoryChange(category)}
                >
                    {category}
                </div>
            ))}
        </div>
    );
};

export default Categories;
