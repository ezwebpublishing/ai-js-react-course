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

      {/* TODO 2: 우선 products[0] 상품 하나를 ProductCard에 product props로 전달하세요. */}

      {/* TODO 3: 2번 코드를 products.map()으로 바꿔 모든 상품을 ProductCard로 출력하세요. (key 사용) */}
    </main>
  )
}

export default App
