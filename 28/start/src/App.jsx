import { useState } from 'react'
import initialProducts from './data/products.js'
import SearchBar from './components/SearchBar.jsx'
import FilterPanel from './components/FilterPanel.jsx'
import ProductDetail from './components/ProductDetail.jsx'
import ProductList from './components/ProductList.jsx'

function App() {
  // TODO 1: initialProducts를 products State로 관리하세요.
  const products = initialProducts

  const [keyword, setKeyword] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('전체')
  const [maxPrice, setMaxPrice] = useState('')

  // TODO 2: selectedProduct State를 만드세요.

  const handleToggleFavorite = (id) => {
    // TODO 3: id 기준으로 특정 상품의 isFavorite 값을 토글하세요.
  }

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

  const favoriteCount = products.filter((product) => product.isFavorite).length

  return (
    <main className="app">
      <h1>상품 탐색</h1>
      <p className="description">
        상품을 검색하고, 관심 상품을 찜한 뒤 상세 정보를 확인해보세요.
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

      {/* TODO 4: selectedProduct가 있을 때 ProductDetail을 출력하세요. */}

      <p className="status">
        검색 결과: {filteredProducts.length}개 / 찜한 상품: {favoriteCount}개
      </p>

      {filteredProducts.length === 0 ? (
        <p className="empty">검색 결과가 없습니다.</p>
      ) : (
        <ProductList
          products={filteredProducts}
          // TODO 5: onToggleFavorite와 onSelectProduct를 전달하세요.
        />
      )}
    </main>
  )
}

export default App
