import { useState } from 'react'
import ProductCard from './components/ProductCard.jsx'

const products = [
  { id: 1, name: '무선 헤드폰', price: 89000 },
  { id: 2, name: '기계식 키보드', price: 129000 },
  { id: 3, name: '무선 마우스', price: 59000 },
  { id: 4, name: '게이밍 모니터', price: 279000 },
]

function App() {
  const [keyword, setKeyword] = useState('')
  const [searchKeyword, setSearchKeyword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setSearchKeyword(keyword.trim())
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchKeyword.toLowerCase())
  )

  return (
    <main className="app">
      <h1>상품 탐색</h1>

      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={keyword}
          placeholder="상품명을 입력하세요"
          onChange={(event) => setKeyword(event.target.value)}
        />
        <button type="submit">검색</button>
      </form>

      {filteredProducts.length === 0 ? (
        <p className="status">검색 결과가 없습니다.</p>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
          />
        ))
      )}
    </main>
  )
}

export default App
