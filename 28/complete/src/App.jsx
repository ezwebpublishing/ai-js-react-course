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

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <p className="status">
        검색 결과: {filteredProducts.length}개 / 찜한 상품: {favoriteCount}개
      </p>

      {filteredProducts.length === 0 ? (
        <p className="empty">검색 결과가 없습니다.</p>
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
