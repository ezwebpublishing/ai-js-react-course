function App() {
  const productName = '무선 헤드폰'
  const price = 89000

  return (
    <main className="app">
      <h1>상품 정보</h1>

      {/* TODO 1: productName을 JSX 표현식으로 출력 */}
      <div className="product-card">
        <h2>상품명을 출력하세요</h2>

        {/* TODO 2: price를 toLocaleString()으로 출력 */}
        <p className="price">가격을 출력하세요</p>
      </div>
    </main>
  )
}

export default App
