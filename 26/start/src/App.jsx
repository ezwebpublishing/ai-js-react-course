import { useState } from 'react'
import products from './data/products.js'
import SearchBar from './components/SearchBar.jsx'
import ProductList from './components/ProductList.jsx'

function App() {
  // TODO 1: keyword State를 만드세요.

  // TODO 2: products 배열에서 상품명에 keyword가 포함된 상품만 남기세요.
  // 힌트: filter(), includes(), toLowerCase(), trim()
  const filteredProducts = products

  return (
    <main className="app">
      <h1>상품 탐색</h1>
      <p className="description">
        상품명을 입력하면 해당 상품만 목록에 표시됩니다.
      </p>

      <SearchBar
        // TODO 3: SearchBar에 keyword와 setKeyword를 props로 전달하세요.
      />

      <p className="status">
        검색 결과: {filteredProducts.length}개
      </p>

      {/* TODO 4: 검색 결과가 없을 때 안내 메시지를 출력하세요. */}
      <ProductList products={filteredProducts} />
    </main>
  )
}

export default App
