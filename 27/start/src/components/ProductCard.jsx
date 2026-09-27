function ProductCard({ product }) {
  return (
    <article className="product-card">
      <h2>{product.name}</h2>
      <p>{product.description}</p>

      <div className="product-meta">
        <span>{product.category}</span>
        <span className="price">{product.price.toLocaleString()}원</span>
      </div>
    </article>
  )
}

export default ProductCard
