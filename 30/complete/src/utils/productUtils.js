export function getFilteredProducts(products, keyword, selectedCategory, maxPrice, isInvalidPrice) {
  return products.filter((product) => {
    const matchesKeyword = product.name
      .toLowerCase()
      .includes(keyword.trim().toLowerCase())

    const matchesCategory =
      selectedCategory === '전체' || product.category === selectedCategory

    const matchesPrice =
      maxPrice === '' ||
      (!isInvalidPrice && product.price <= Number(maxPrice))

    return matchesKeyword && matchesCategory && matchesPrice
  })
}

export function getFavoriteCount(products) {
  return products.filter((product) => product.isFavorite).length
}
