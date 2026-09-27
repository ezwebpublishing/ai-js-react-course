import ProductCard from './ProductCard.jsx'

function ProductList({ products, onToggleFavorite, onSelectProduct }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          // TODO: ProductCard에 onToggleFavorite와 onSelectProduct를 전달하세요.
        />
      ))}
    </div>
  )
}

export default ProductList
