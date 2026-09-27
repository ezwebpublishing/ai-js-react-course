const categories = ['전체', '음향', '입력장치', '디스플레이']

function FilterPanel({
  selectedCategory,
  onCategoryChange,
  maxPrice,
  onMaxPriceChange,
}) {
  return (
    <div className="filter-panel">
      <input
        type="number"
        value={maxPrice}
        placeholder="최대 가격을 입력하세요"
        onChange={(event) => onMaxPriceChange(event.target.value)}
      />

      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterPanel
