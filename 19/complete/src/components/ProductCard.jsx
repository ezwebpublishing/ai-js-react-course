function ProductCard({ product }) {
  const finalPrice = product.price - product.price * (product.discountRate / 100)

  return (
    <article className={`product-card ${product.hasStock ? '' : 'soldout'}`}>
      <div className="card-top">
        <h2>{product.name}</h2>

        {product.discountRate > 0 && (
          <span className="badge">{product.discountRate}% SALE</span>
        )}
      </div>

      <p className="price">{finalPrice.toLocaleString()}원</p>
      <p className="stock">{product.hasStock ? '구매 가능' : '품절'}</p>
    </article>
  )
}

export default ProductCard
