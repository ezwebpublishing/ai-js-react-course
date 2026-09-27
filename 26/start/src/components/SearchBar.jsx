function SearchBar({ keyword, onKeywordChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={keyword}
        placeholder="상품명을 검색하세요"
        // TODO: 입력값이 바뀔 때 onKeywordChange를 실행하세요.
      />
    </div>
  )
}

export default SearchBar
