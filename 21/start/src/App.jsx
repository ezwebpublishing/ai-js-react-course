import { useState } from 'react'
import ProductCard from './components/ProductCard.jsx'

function App() {
  // TODO 1: message 상태를 '상품을 확인해보세요.'로 시작하세요.
  // TODO 2: count 상태를 1로 시작하세요.
  // 이번 차시에서는 상태를 선언하고 화면에 출력하는 데 집중합니다.

  return (
    <main className="app">
      <h1>상품 탐색</h1>

      <p className="status">상태값을 출력하세요.</p>

      <ProductCard
        name="무선 헤드폰"
        price={89000}
      />
    </main>
  )
}

export default App
