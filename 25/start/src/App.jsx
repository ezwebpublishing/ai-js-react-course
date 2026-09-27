import ProductList from './components/ProductList.jsx'

const products = [
  {
    id: 1,
    name: '무선 헤드폰',
    price: 89000,
    category: '음향',
  },
  {
    id: 2,
    name: '기계식 키보드',
    price: 129000,
    category: '입력장치',
  },
  {
    id: 3,
    name: '무선 마우스',
    price: 59000,
    category: '입력장치',
  },
]

function App() {
  return (
    <main className="app">
      <section className="header">
        <h1>상품 탐색 프로젝트</h1>
        <p>상품 데이터를 컴포넌트 구조로 출력합니다.</p>
      </section>

      {/* TODO: ProductList에 products 배열을 props로 전달하세요. */}
    </main>
  )
}

export default App
