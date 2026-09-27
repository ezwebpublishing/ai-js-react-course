import ProductCard from './components/ProductCard.jsx'

function App() {
  return (
    <main className="app">
      <h1>상품 탐색</h1>

      <ProductCard
        name="무선 헤드폰"
        price={89000}
      />
    </main>
  )
}

export default App
