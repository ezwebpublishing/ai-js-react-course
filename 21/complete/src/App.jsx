import { useState } from 'react'
import ProductCard from './components/ProductCard.jsx'

function App() {
  const [message, setMessage] = useState('상품을 확인해보세요.')
  const [count, setCount] = useState(1)

  // setMessage, setCount는 상태를 변경하는 함수입니다.
  // 실제 사용자 이벤트와 연결하는 방법은 22차시에서 학습합니다.

  return (
    <main className="app">
      <h1>상품 탐색</h1>

      <p className="status">
        {message} / 현재 상태값: {count}
      </p>

      <ProductCard
        name="무선 헤드폰"
        price={89000}
      />
    </main>
  )
}

export default App
