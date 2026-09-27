// SECTION 03 - 14차시
// search.js: 상품 검색 로직을 담당합니다.

export const normalizeText = (text) => {
  return text.trim().toLowerCase();
};

export const searchProducts = (productItems, keyword) => {
  const lowerKeyword = normalizeText(keyword);

  if (lowerKeyword === "") {
    return productItems;
  }

  return productItems.filter((product) => {
    const name = normalizeText(product.name);
    const description = normalizeText(product.description);

    return name.includes(lowerKeyword) || description.includes(lowerKeyword);
  });
};
