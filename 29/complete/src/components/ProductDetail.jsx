function ProductDetail({ product, onClose }) {
  return (
    <section className="detail-panel">
      <h2>{product.name}</h2>
      <p>{product.detail}</p>

      <dl>
        <dt>카테고리</dt>
        <dd>{product.category}</dd>
        <dt>가격</dt>
        <dd>{product.price.toLocaleString()}원</dd>
        <dt>찜 여부</dt>
        <dd>{product.isFavorite ? '찜한 상품' : '아직 찜하지 않음'}</dd>
      </dl>

      <button type="button" onClick={onClose}>
        상세 닫기
      </button>
    </section>
  )
}

export default ProductDetail
