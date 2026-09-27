import ProductCard from './ProductCard.jsx'

function ProductList({ products, onToggleFavorite, onSelectProduct }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onToggleFavorite={onToggleFavorite}
          onSelectProduct={onSelectProduct}
        />
      ))}
    </div>
  )
}

export default ProductList
