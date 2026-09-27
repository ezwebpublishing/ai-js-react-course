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
        <button
          type="button"
          className="primary"
          onClick={() => onToggleFavorite(product.id)}
        >
          {product.isFavorite ? '♥ 찜함' : '♡ 찜하기'}
        </button>

        <button
          type="button"
          onClick={() => onSelectProduct(product)}
        >
          상세 보기
        </button>
      </div>
    </article>
  )
}

export default ProductCard
