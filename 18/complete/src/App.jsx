function App() {
  const product = {
    name: '무선 헤드폰',
    price: 89000,
    discountRate: 20,
    hasStock: true,
    isFavorite: false,
  }

  // 데이터 계산: 할인 금액을 반영한 최종 가격
  const finalPrice = product.price - product.price * (product.discountRate / 100)

  return (
    <main className="app">
      <h1>상품 정보</h1>

      {/* className 조합: 재고가 없으면 soldout 클래스를 함께 적용 */}
      <article className={`product-card ${product.hasStock ? '' : 'soldout'}`}>
        <div className="card-top">
          <h2>{product.name}</h2>

          {/* 조건부 렌더링(&&): 할인율이 있을 때만 배지 출력 */}
          {product.discountRate > 0 && (
            <span className="badge">{product.discountRate}% SALE</span>
          )}
        </div>

        <p className="price">{finalPrice.toLocaleString()}원</p>

        {/* 조건부 렌더링(삼항 연산자): 재고 상태 문구 */}
        <p className="stock">{product.hasStock ? '구매 가능' : '품절'}</p>

        <button
          type="button"
          className={`favorite-button ${product.isFavorite ? 'active' : ''}`}
        >
          {product.isFavorite ? '♥ 찜함' : '♡ 찜하기'}
        </button>
      </article>

      {/* 다음 차시 준비: 이 카드 JSX를 ProductCard 컴포넌트로 분리해 봅니다. */}
    </main>
  )
}

export default App
