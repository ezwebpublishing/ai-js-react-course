// SECTION 03 - 15차시
// filter.js: 검색어와 카테고리 조건을 함께 처리합니다.

// TODO 01
// normalizeText 함수를 완성하세요.
// trim()과 toLowerCase()를 사용합니다.

export const normalizeText = (text) => {

};

// TODO 02
// 검색어와 카테고리를 함께 처리하는 filterProducts 함수를 완성하세요.
//
// 매개변수:
// productItems
// { keyword = "", category = "전체" }
//
// 해야 할 일:
// 1. keyword를 normalizeText()로 정리
// 2. productItems.filter() 사용
// 3. 상품명과 설명에 검색어가 포함되는지 확인
// 4. category가 "전체"이면 모두 통과
// 5. 그렇지 않으면 product.category === category 확인
// 6. 두 조건을 모두 만족하면 true 반환

export const filterProducts = (
  productItems,
  { keyword = "", category = "전체" }
) => {

};
