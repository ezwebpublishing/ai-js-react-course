// SECTION 03 - 12차시
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

export const createProductCardHTML = ({
  name,
  description,
  price,
  category,
  discountRate,
  hasStock,
}) => {
  const finalPrice = calculateDiscountPrice(price, discountRate);
  const stockText = hasStock ? "재고 있음" : "품절";

  return `
    <article class="product-card" data-name="${name}" data-category="${category}">
      <div class="card-top">
        <h3>${name}</h3>
        <span class="badge ${discountRate > 0 ? "" : "hidden"}">
          ${discountRate}% SALE
        </span>
      </div>
      <p class="description">${description}</p>
      <strong class="price">${formatPrice(finalPrice)}</strong>
      <span class="meta">${category} · ${stockText}</span>
    </article>
  `;
};

export const renderProducts = (productItems) => {
  productCount.textContent = productItems.length;

  if (productItems.length === 0) {
    productList.innerHTML = "";
    emptyMessage.textContent = "표시할 상품이 없습니다.";
    return;
  }

  emptyMessage.textContent = "";

  const productHTML = productItems.map((product) => {
    return createProductCardHTML(product);
  });

  productList.innerHTML = productHTML.join("");
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

// TODO 01
// 모든 상품 카드에서 highlight, dimmed 클래스를 제거하는 함수를 만드세요.
// 함수 이름: clearCardStyles
// 해야 할 일:
// 1. document.querySelectorAll(".product-card")로 모든 카드 선택
// 2. forEach로 각 card의 highlight, dimmed 클래스 제거

export const clearCardStyles = () => {

};

// TODO 02
// 검색어와 카테고리 조건에 따라 카드 스타일을 적용하는 함수를 만드세요.
// 함수 이름: applyCardStyles
// 매개변수: { keyword, category }
//
// 해야 할 일:
// 1. keyword.trim().toLowerCase()로 검색어 정리
// 2. 모든 .product-card 선택
// 3. card.dataset.name, card.dataset.category 값 확인
// 4. 검색어 조건과 카테고리 조건을 모두 만족하면 highlight 추가
// 5. 조건에 맞지 않으면 dimmed 추가
// 힌트: classList.toggle("highlight", isMatch)

export const applyCardStyles = ({ keyword, category }) => {

};

// TODO 03
// 상태 메시지를 기본값으로 되돌리는 함수를 만드세요.
// 함수 이름: resetStatus
// 해야 할 일:
// 1. statusMessage.textContent를 기본 문구로 변경
// 2. active 클래스 제거

export const resetStatus = () => {

};
