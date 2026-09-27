// SECTION 04 - 16차시
// ui.js: 상태 데이터를 화면으로 렌더링합니다.

const productList = document.querySelector("#productList");
const productCount = document.querySelector("#productCount");
const emptyMessage = document.querySelector("#emptyMessage");
const statusMessage = document.querySelector("#statusMessage");
const favoriteCount = document.querySelector("#favoriteCount");
const totalCount = document.querySelector("#totalCount");

export const formatPrice = (price) => `${price.toLocaleString()}원`;

export const calculateDiscountPrice = (price, rate = 0) => {
  const discountAmount = price * (rate / 100);
  return price - discountAmount;
};

// TODO 03
// 상품 카드 HTML 문자열에 찜 버튼을 추가하세요.
// 해야 할 일:
// 1. isFavorite 값을 구조분해로 받기
// 2. favoriteText 만들기
// 3. article에 isFavorite이면 favorite 클래스 추가
// 4. button.favorite-button 추가
// 5. button에 data-action="favorite", data-id="${id}" 넣기

export const createProductCardHTML = ({
  id,
  name,
  description,
  price,
  category,
  discountRate,
  hasStock,
  isFavorite,
}) => {
  const finalPrice = calculateDiscountPrice(price, discountRate);
  const stockText = hasStock ? "재고 있음" : "품절";
  const stockClass = hasStock ? "available" : "soldout";

  return `
    <article
      class="product-card ${hasStock ? "" : "soldout"}"
      data-id="${id}"
      data-name="${name}"
      data-category="${category}"
    >
      <div class="card-top">
        <h3>${name}</h3>
        <span class="badge ${discountRate > 0 ? "" : "hidden"}">
          ${discountRate}% SALE
        </span>
      </div>

      <p class="description">${description}</p>

      <div class="price-wrap">
        <span class="original-price ${discountRate > 0 ? "" : "hidden"}">
          ${formatPrice(price)}
        </span>
        <strong class="final-price">${formatPrice(finalPrice)}</strong>
      </div>

      <span class="meta">${category}</span>
      <span class="stock ${stockClass}">${stockText}</span>
    </article>
  `;
};

export const renderProducts = (
  productItems,
  emptyText = "표시할 상품이 없습니다."
) => {
  productCount.textContent = productItems.length;

  if (productItems.length === 0) {
    productList.innerHTML = "";
    emptyMessage.textContent = emptyText;
    return;
  }

  emptyMessage.textContent = "";

  const productHTML = productItems.map((product) => {
    return createProductCardHTML(product);
  });

  productList.innerHTML = productHTML.join("");
};

// TODO 04
// 전체 상품 개수와 찜한 상품 개수를 화면에 출력하는 함수를 완성하세요.
// 함수 이름: renderSummary
// 매개변수: { total, favorite }

export const renderSummary = ({ total, favorite }) => {

};

export const setStatus = (message) => {
  statusMessage.textContent = message;
  statusMessage.classList.add("active");
};

export const resetStatus = () => {
  statusMessage.textContent =
    "검색어, 카테고리, 찜하기 상태가 모두 화면에 영향을 줍니다.";
  statusMessage.classList.remove("active");
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

export const updateActiveCategoryButton = (selectedButton) => {
  const categoryButtons = document.querySelectorAll(".category-button");

  categoryButtons.forEach((button) => {
    button.classList.remove("active");
  });

  selectedButton.classList.add("active");
};

export const resetCategoryButtons = () => {
  const categoryButtons = document.querySelectorAll(".category-button");

  categoryButtons.forEach((button) => {
    const isAll = button.dataset.category === "전체";
    button.classList.toggle("active", isAll);
  });
};
