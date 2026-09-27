const categories = ['전체', '음향', '입력장치', '디스플레이']

function FilterPanel({
  selectedCategory,
  onCategoryChange,
  maxPrice,
  onMaxPriceChange,
}) {
  return (
    <div className="filter-panel">
      {/* TODO 1: maxPrice와 onMaxPriceChange를 input에 연결하세요. */}
      <input
        type="number"
        placeholder="최대 가격을 입력하세요"
      />

      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            // TODO 2: 선택된 카테고리일 때 active 클래스를 적용하세요.
            // TODO 3: 클릭하면 onCategoryChange(category)를 실행하세요.
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterPanel
