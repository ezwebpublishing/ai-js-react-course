function App() {
  const product = {
    name: '무선 헤드폰',
    price: 89000,
    discountRate: 20,
    hasStock: true,
    isFavorite: false,
  }

  // TODO 1: 할인 금액을 반영한 finalPrice를 계산하세요.
  // 힌트: product.price - product.price * (product.discountRate / 100)
  const finalPrice = product.price

  return (
    <main className="app">
      <h1>상품 정보</h1>

      {/* TODO 5: 재고가 없으면 product-card에 soldout 클래스를 함께 적용하세요. */}
      <article className="product-card">
        <div className="card-top">
          {/* TODO 2: product.name을 JSX 표현식으로 출력하세요. */}
          <h2>상품명을 출력하세요</h2>

          {/* TODO 3: discountRate가 0보다 클 때만 할인 배지를 출력하세요. (&&) */}
        </div>

        {/* TODO 1-2: finalPrice를 toLocaleString()으로 출력하세요. */}
        <p className="price">가격을 출력하세요</p>

        {/* TODO 4: hasStock에 따라 '구매 가능' 또는 '품절'을 출력하세요. (삼항 연산자) */}
        <p className="stock">재고 상태를 출력하세요</p>

        {/* TODO 6: isFavorite에 따라 버튼 문구를 '♥ 찜함' 또는 '♡ 찜하기'로 출력하세요. */}
        <button type="button" className="favorite-button">
          찜하기
        </button>
      </article>

      {/* 다음 차시 준비: 이 카드 JSX를 ProductCard 컴포넌트로 분리해 봅니다. */}
    </main>
  )
}

export default App
