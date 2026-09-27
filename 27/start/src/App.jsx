import { useState } from 'react'
import products from './data/products.js'
import SearchBar from './components/SearchBar.jsx'
import FilterPanel from './components/FilterPanel.jsx'
import ProductList from './components/ProductList.jsx'

function App() {
  const [keyword, setKeyword] = useState('')

  // TODO 1: selectedCategory State를 만드세요.
  // TODO 2: maxPrice State를 만드세요.

  const filteredProducts = products.filter((product) => {
    const matchesKeyword = product.name
      .toLowerCase()
      .includes(keyword.trim().toLowerCase())

    // TODO 3: 카테고리 조건을 작성하세요.
    // 힌트: selectedCategory가 '전체'이면 모든 상품을 허용합니다.
    const matchesCategory = true

    // TODO 4: 가격 조건을 작성하세요.
    // 힌트: maxPrice가 비어 있으면 모든 상품을 허용합니다.
    const matchesPrice = true

    return matchesKeyword && matchesCategory && matchesPrice
  })

  return (
    <main className="app">
      <h1>상품 탐색</h1>
      <p className="description">
        상품명, 카테고리, 최대 가격으로 상품을 찾아보세요.
      </p>

      <SearchBar
        keyword={keyword}
        onKeywordChange={setKeyword}
      />

      <FilterPanel
        // TODO 5: FilterPanel에 카테고리와 가격 관련 props를 전달하세요.
      />

      <p className="status">
        검색 결과: {filteredProducts.length}개
      </p>

      {filteredProducts.length === 0 ? (
        <p className="empty">검색 결과가 없습니다.</p>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </main>
  )
}

export default App
