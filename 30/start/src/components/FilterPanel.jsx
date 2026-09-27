const categories = ['전체', '음향', '입력장치', '디스플레이']

function FilterPanel({
  selectedCategory,
  onCategoryChange,
  maxPrice,
  onMaxPriceChange,
  onResetFilters,
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

      <button
        type="button"
        className="reset-button"
        onClick={onResetFilters}
      >
        필터 초기화
      </button>
    </div>
  )
}

export default FilterPanel
