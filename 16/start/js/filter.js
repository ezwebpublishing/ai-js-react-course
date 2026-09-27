// SECTION 04 - 16차시
// filter.js: 검색어와 카테고리 조건을 함께 처리합니다.

export const normalizeText = (text) => {
  return text.trim().toLowerCase();
};

export const filterProducts = (
  productItems,
  { keyword = "", category = "전체" }
) => {
  const lowerKeyword = normalizeText(keyword);

  return productItems.filter((product) => {
    const name = normalizeText(product.name);
    const description = normalizeText(product.description);

    const isKeywordMatch =
      lowerKeyword === "" ||
      name.includes(lowerKeyword) ||
      description.includes(lowerKeyword);

    const isCategoryMatch =
      category === "전체" ||
      product.category === category;

    return isKeywordMatch && isCategoryMatch;
  });
};
