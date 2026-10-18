export function isInvalidMaxPrice(maxPrice) {
  if (maxPrice === '') return false

  const numericMaxPrice = Number(maxPrice)
  return !Number.isFinite(numericMaxPrice) || numericMaxPrice < 0
}

export function formatPrice(price) {
  return price.toLocaleString('ko-KR')
}

export function getFilteredProducts(products, keyword, selectedCategory, maxPrice) {
  const normalizedKeyword = keyword.trim().toLowerCase()

  if (isInvalidMaxPrice(maxPrice)) return []

  return products.filter((product) => {
    const matchesKeyword = product.name
      .toLowerCase()
      .includes(normalizedKeyword)
    const matchesCategory =
      selectedCategory === '전체' || product.category === selectedCategory
    const matchesPrice =
      maxPrice === '' || product.price <= Number(maxPrice)

    return matchesKeyword && matchesCategory && matchesPrice
  })
}

export function getFavoriteCount(products) {
  return products.filter((product) => product.isFavorite).length
}
