function ProductCard({ name, price }) {
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p className="price">{price.toLocaleString()}원</p>
    </div>
  )
}

export default ProductCard
