export function getFilteredProducts(products, keyword, selectedCategory, maxPrice) {
  const normalizedKeyword = keyword.trim().toLowerCase()
  const hasInvalidPrice = maxPrice !== '' && Number(maxPrice) < 0

  if (hasInvalidPrice) return []

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
