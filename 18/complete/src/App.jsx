function App() {
  const productName = '무선 헤드폰'
  const price = 89000

  return (
    <main className="app">
      <h1>상품 정보</h1>

      <div className="product-card">
        <h2>{productName}</h2>
        <p className="price">{price.toLocaleString()}원</p>
      </div>
    </main>
  )
}

export default App
