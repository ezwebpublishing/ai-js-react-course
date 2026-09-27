function ProductCard({ product, onToggleFavorite, onSelectProduct }) {
  return (
    <article className="product-card">
      <h2>{product.name}</h2>
      <p>{product.description}</p>

      <div className="product-meta">
        <span>{product.category}</span>
        <span className="price">{product.price.toLocaleString()}원</span>
      </div>

      <div className="card-actions">
        {/* TODO 1: 찜하기 버튼을 만들고 onToggleFavorite(product.id)를 실행하세요. */}

        {/* TODO 2: 상세 보기 버튼을 만들고 onSelectProduct(product)를 실행하세요. */}
      </div>
    </article>
  )
}

export default ProductCard
