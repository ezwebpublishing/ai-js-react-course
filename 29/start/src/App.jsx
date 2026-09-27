import { useState } from 'react'
import initialProducts from './data/products.js'
import SearchBar from './components/SearchBar.jsx'
import FilterPanel from './components/FilterPanel.jsx'
import ProductDetail from './components/ProductDetail.jsx'
import ProductList from './components/ProductList.jsx'

function App() {
  const [products, setProducts] = useState(initialProducts)
  const [keyword, setKeyword] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('전체')
  const [maxPrice, setMaxPrice] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)

  // TODO 1: maxPrice가 0보다 작은지 확인하는 isInvalidPrice를 만드세요.
  const isInvalidPrice = false

  // TODO 2: 잘못된 가격 입력 안내 메시지를 만드세요.
  const priceMessage = ''

  const handleResetFilters = () => {
    // TODO 3: keyword, selectedCategory, maxPrice, selectedProduct를 초기화하세요.
  }

  const handleToggleFavorite = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id !== id) return product

        return {
          ...product,
          isFavorite: !product.isFavorite,
        }
      })
    )

    setSelectedProduct((prevProduct) => {
      if (!prevProduct || prevProduct.id !== id) return prevProduct

      return {
        ...prevProduct,
        isFavorite: !prevProduct.isFavorite,
      }
    })
  }

  const filteredProducts = products.filter((product) => {
    const matchesKeyword = product.name
      .toLowerCase()
      .includes(keyword.trim().toLowerCase())

    const matchesCategory =
      selectedCategory === '전체' || product.category === selectedCategory

    // TODO 4: isInvalidPrice를 고려해 가격 조건을 작성하세요.
    const matchesPrice =
      maxPrice === '' || product.price <= Number(maxPrice)

    return matchesKeyword && matchesCategory && matchesPrice
  })

  const favoriteCount = products.filter((product) => product.isFavorite).length

  // TODO 5: hasNoResults와 statusText를 변수로 분리하세요.
  const hasNoResults = false
  const statusText = ''

  return (
    <main className="app">
      <h1>상품 탐색</h1>
      <p className="description">
        검색, 필터, 찜하기, 상세 보기 흐름을 함께 확인해보세요.
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
        onResetFilters={handleResetFilters}
      />

      {/* TODO 6: priceMessage가 있을 때 오류 안내 문구를 출력하세요. */}

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <p className="status">
        검색 결과: {filteredProducts.length}개 / 찜한 상품: {favoriteCount}개
      </p>

      {/* TODO 7: hasNoResults를 활용해 결과 없음 UI와 ProductList를 분기하세요. */}
      <ProductList
        products={filteredProducts}
        onToggleFavorite={handleToggleFavorite}
        onSelectProduct={setSelectedProduct}
      />
    </main>
  )
}

export default App
