import { useState } from 'react'
import products from './data/products.js'
import SearchBar from './components/SearchBar.jsx'
import FilterPanel from './components/FilterPanel.jsx'
import ProductList from './components/ProductList.jsx'

function App() {
  const [keyword, setKeyword] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('전체')
  const [maxPrice, setMaxPrice] = useState('')

  const filteredProducts = products.filter((product) => {
    const matchesKeyword = product.name
      .toLowerCase()
      .includes(keyword.trim().toLowerCase())

    const matchesCategory =
      selectedCategory === '전체' || product.category === selectedCategory

    const matchesPrice =
      maxPrice === '' || product.price <= Number(maxPrice)

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
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        maxPrice={maxPrice}
        onMaxPriceChange={setMaxPrice}
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
