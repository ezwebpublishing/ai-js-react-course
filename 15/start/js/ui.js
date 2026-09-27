// SECTION 03 - 15차시
// ui.js: 상품 목록 렌더링과 화면 상태 변경을 담당합니다.

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
  id,
  name,
  description,
  price,
  category,
  discountRate,
  hasStock,
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

export const setStatus = (message) => {
  statusMessage.textContent = message;
  statusMessage.classList.add("active");
};

export const resetStatus = () => {
  statusMessage.textContent = "검색어나 카테고리를 선택해보세요.";
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
