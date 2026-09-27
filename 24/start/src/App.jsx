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

  // TODO 1: searchKeyword가 포함된 상품만 남기도록 filter()를 작성하세요.
  const filteredProducts = products

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

      {/* TODO 2: 검색 결과가 없을 때 안내 메시지를 출력하세요. */}

      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </main>
  )
}

export default App
