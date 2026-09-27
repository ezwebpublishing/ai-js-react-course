function SearchBar({ keyword, onKeywordChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={keyword}
        placeholder="상품명을 검색하세요"
        onChange={(event) => onKeywordChange(event.target.value)}
      />
    </div>
  )
}

export default SearchBar
