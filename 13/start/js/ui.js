// SECTION 03 - 13차시
// ui.js: 데이터로 HTML을 만들고 화면에 출력합니다.

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
// 상품 객체 하나를 받아 카드 HTML 문자열 하나를 반환하는 함수를 완성하세요.
// 함수 이름: createProductCardHTML
//
// 해야 할 일:
// 1. 구조분해로 id, name, description, price, category, discountRate, hasStock 꺼내기
// 2. 최종 가격 계산
// 3. 재고 문구와 재고 클래스 만들기
// 4. article.product-card 문자열 return
// 5. article에 data-id, data-name, data-category 속성 넣기

export const createProductCardHTML = ({
  id,
  name,
  description,
  price,
  category,
  discountRate,
  hasStock,
}) => {

};

// TODO 05
// 상품 배열을 화면에 출력하는 renderProducts 함수를 완성하세요.
// 해야 할 일:
// 1. productCount.textContent에 상품 개수 출력
// 2. 상품이 0개면 productList.innerHTML 비우기, emptyMessage 출력 후 return
// 3. 상품이 있으면 emptyMessage 비우기
// 4. productItems.map(createProductCardHTML)로 HTML 배열 만들기
// 5. productList.innerHTML = productHTML.join("");

export const renderProducts = (productItems) => {

};

export const setStatus = (message) => {
  statusMessage.textContent = message;
  statusMessage.classList.add("active");
};

export const clearSelectedCards = () => {
  const cards = document.querySelectorAll(".product-card");

  cards.forEach((card) => {
    card.classList.remove("selected");
  });
};

export const selectCard = (card) => {
  clearSelectedCards();
  card.classList.add("selected");

  const productName = card.dataset.name;
  setStatus(`${productName} 상품을 선택했습니다.`);
};

export const clearCardStyles = () => {
  const cards = document.querySelectorAll(".product-card");

  cards.forEach((card) => {
    card.classList.remove("highlight");
    card.classList.remove("dimmed");
  });
};

export const applyCardStyles = ({ keyword, category }) => {
  const cards = document.querySelectorAll(".product-card");
  const lowerKeyword = keyword.trim().toLowerCase();

  cards.forEach((card) => {
    const cardName = card.dataset.name.toLowerCase();
    const cardCategory = card.dataset.category;

    const isKeywordMatch =
      lowerKeyword === "" || cardName.includes(lowerKeyword);

    const isCategoryMatch =
      category === "전체" || cardCategory === category;

    const isMatch = isKeywordMatch && isCategoryMatch;

    card.classList.toggle("highlight", isMatch);
    card.classList.toggle("dimmed", !isMatch);
  });
};

export const resetStatus = () => {
  statusMessage.textContent = "상품 데이터를 HTML 카드로 렌더링합니다.";
  statusMessage.classList.remove("active");
};
