// SECTION 03 - 11차시
// ui.js: 화면 출력과 화면 상태 변경을 담당합니다.

const productList = document.querySelector("#productList");
const productCount = document.querySelector("#productCount");
const emptyMessage = document.querySelector("#emptyMessage");
const statusMessage = document.querySelector("#statusMessage");

export const formatPrice = (price) => `${price.toLocaleString()}원`;

export const calculateDiscountPrice = (price, rate = 0) => {
  const discountAmount = price * (rate / 100);
  return price - discountAmount;
};

// TODO 04
// createProductCardHTML 함수를 완성하세요.
// 상품 객체를 받아 article.product-card HTML 문자열을 return합니다.
// article에는 data-name, data-category 속성을 넣습니다.

export const createProductCardHTML = ({
  name,
  description,
  price,
  category,
  discountRate,
  hasStock,
}) => {

};

// TODO 05
// renderProducts 함수를 완성하세요.
// 해야 할 일:
// 1. 상품 개수 출력
// 2. 상품이 없으면 빈 상태 메시지 출력 후 return
// 3. map(createProductCardHTML)로 HTML 배열 생성
// 4. join("")으로 합쳐 productList.innerHTML에 출력

export const renderProducts = (productItems) => {

};

// TODO 06
// 상태 메시지를 변경하는 setStatus 함수를 완성하세요.
// statusMessage.textContent를 바꾸고 active 클래스를 추가합니다.

export const setStatus = (message) => {

};

// TODO 07
// 모든 상품 카드에서 selected 클래스를 제거하는 함수를 완성하세요.

export const clearSelectedCards = () => {

};

// TODO 08
// 클릭한 card에 selected 클래스를 추가하는 함수를 완성하세요.
// 기존 선택은 clearSelectedCards()로 해제하고,
// card.dataset.name을 사용해 상태 메시지를 출력합니다.

export const selectCard = (card) => {

};
