import ProductCard from './components/ProductCard.jsx'

const products = [
  {
    id: 1,
    name: '무선 헤드폰',
    price: 89000,
    discountRate: 20,
    hasStock: true,
  },
  {
    id: 2,
    name: '기계식 키보드',
    price: 129000,
    discountRate: 0,
    hasStock: true,
  },
  {
    id: 3,
    name: '무선 마우스',
    price: 59000,
    discountRate: 10,
    hasStock: false,
  },
]

function App() {
  return (
    <main className="app">
      <h1>상품 탐색</h1>

      {/* 1단계: 상품 하나를 전달하는 흐름
      <ProductCard product={products[0]} />
      */}

      {/* 2단계: 같은 ProductCard를 상품 수만큼 재사용 */}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  )
}

export default App
