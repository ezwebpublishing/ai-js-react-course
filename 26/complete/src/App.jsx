import { useState } from 'react'
import products from './data/products.js'
import SearchBar from './components/SearchBar.jsx'
import ProductList from './components/ProductList.jsx'

function App() {
  const [keyword, setKeyword] = useState('')

  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(keyword.trim().toLowerCase())
  )

  return (
    <main className="app">
      <h1>상품 탐색</h1>
      <p className="description">
        상품명을 입력하면 해당 상품만 목록에 표시됩니다.
      </p>

      <SearchBar
        keyword={keyword}
        onKeywordChange={setKeyword}
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
