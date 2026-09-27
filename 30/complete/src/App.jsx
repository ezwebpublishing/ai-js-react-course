import { useState } from 'react'
import initialProducts from './data/products.js'
import SearchBar from './components/SearchBar.jsx'
import FilterPanel from './components/FilterPanel.jsx'
import ProductDetail from './components/ProductDetail.jsx'
import ProductList from './components/ProductList.jsx'
import { getFavoriteCount, getFilteredProducts } from './utils/productUtils.js'

function App() {
  const [products, setProducts] = useState(initialProducts)
  const [keyword, setKeyword] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('전체')
  const [maxPrice, setMaxPrice] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const isInvalidPrice =
    maxPrice !== '' && Number(maxPrice) < 0

  const priceMessage = isInvalidPrice
    ? '가격은 0 이상으로 입력하세요.'
    : ''

  const handleResetFilters = () => {
    setKeyword('')
    setSelectedCategory('전체')
    setMaxPrice('')
    setSelectedProduct(null)
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

  const filteredProducts = getFilteredProducts(
    products,
    keyword,
    selectedCategory,
    maxPrice,
    isInvalidPrice
  )

  const favoriteCount = getFavoriteCount(products)
  const hasNoResults = filteredProducts.length === 0
  const statusText = `검색 결과: ${filteredProducts.length}개 / 찜한 상품: ${favoriteCount}개`

  return (
    <main className="app">
      <h1>상품 탐색</h1>
      <p className="description">
        검색, 필터, 찜하기, 상세 보기 흐름을 최종 점검해보세요.
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

      {priceMessage && (
        <p className="error-message">{priceMessage}</p>
      )}

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <p className="status">{statusText}</p>

      {hasNoResults ? (
        <p className="empty">조건에 맞는 상품이 없습니다.</p>
      ) : (
        <ProductList
          products={filteredProducts}
          onToggleFavorite={handleToggleFavorite}
          onSelectProduct={setSelectedProduct}
        />
      )}
    </main>
  )
}

export default App
