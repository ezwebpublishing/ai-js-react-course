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
