import { useState } from 'react'
import ProductCard from './components/ProductCard.jsx'

function App() {
  const [keyword, setKeyword] = useState('')
  const [submittedKeyword, setSubmittedKeyword] = useState('')

  const handleSubmit = (event) => {
    // TODO 1: Form 기본 제출 동작을 막으세요.

    // TODO 2: submittedKeyword에 현재 keyword를 저장하세요.
  }

  return (
    <main className="app">
      <h1>상품 탐색</h1>

      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={keyword}
          placeholder="상품명을 입력하세요"
          // TODO 3: 입력할 때 keyword 상태를 변경하세요.
        />
        <button type="submit">입력 확인</button>
      </form>

      <p className="status">
        입력 결과: {submittedKeyword || '아직 입력하지 않았습니다.'}
      </p>

      <ProductCard name="무선 헤드폰" price={89000} />
    </main>
  )
}

export default App
