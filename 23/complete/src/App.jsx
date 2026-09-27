import { useState } from 'react'
import ProductCard from './components/ProductCard.jsx'

const products = [
  { id: 1, name: '무선 헤드폰', price: 89000 },
  { id: 2, name: '기계식 키보드', price: 129000 },
  { id: 3, name: '무선 마우스', price: 59000 },
]

function App() {
  const [keyword, setKeyword] = useState('')
  const [submittedKeyword, setSubmittedKeyword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmittedKeyword(keyword)
  }

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
        <button type="submit">입력 확인</button>
      </form>

      <p className="status">
        입력 결과: {submittedKeyword || '아직 입력하지 않았습니다.'}
      </p>

      {products.map((product) => (
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
