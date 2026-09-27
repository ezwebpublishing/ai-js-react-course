// SECTION 02 - 05차시
// 함수 이해하기

console.log("05차시: 함수 이해하기");

// 1. 상품 정보를 변수로 저장합니다.
const productName = "무선 헤드폰";
const productDescription = "가볍게 즐기는 데일리 무선 헤드폰";
const productPrice = 89000;
const discountRate = 20;
const isBest = true;
const hasStock = true;

let count = 0;

// 2. HTML 요소를 선택합니다.
const badge = document.querySelector("#badge");
const discountBadge = document.querySelector("#discountBadge");
const productNameElement = document.querySelector("#productName");
const productDescriptionElement = document.querySelector("#productDescription");
const priceElement = document.querySelector("#price");
const finalPriceElement = document.querySelector("#finalPrice");
const deliveryMessage = document.querySelector("#deliveryMessage");
const stockMessage = document.querySelector("#stockMessage");
const message = document.querySelector("#message");
const likeBtn = document.querySelector("#likeBtn");
const likeCount = document.querySelector("#likeCount");
const resetBtn = document.querySelector("#resetBtn");

// 3. 기능별 함수를 만듭니다.
function formatPrice(price) {
  return `${price.toLocaleString()}원`;
}

function calculateDiscountPrice(price, rate) {
  const discountAmount = price * (rate / 100);
  return price - discountAmount;
}

function getDeliveryText(price) {
  if (price >= 50000) {
    return "무료배송 상품입니다.";
  }

  return "배송비 3,000원이 추가됩니다.";
}

function getStockText(stock) {
  if (stock) {
    return "구매 가능한 상품입니다.";
  }

  return "현재 품절된 상품입니다.";
}

function renderProduct() {
  const finalPrice = calculateDiscountPrice(productPrice, discountRate);

  productNameElement.textContent = productName;
  productDescriptionElement.textContent = productDescription;
  priceElement.textContent = formatPrice(productPrice);
  finalPriceElement.textContent = formatPrice(finalPrice);

  if (isBest) {
    badge.textContent = "BEST";
  } else {
    badge.textContent = "NORMAL";
  }

  if (discountRate > 0) {
    discountBadge.textContent = `${discountRate}% SALE`;
    discountBadge.classList.remove("hidden");
  } else {
    discountBadge.classList.add("hidden");
  }

  deliveryMessage.textContent = getDeliveryText(finalPrice);

  if (finalPrice >= 50000) {
    deliveryMessage.classList.add("free");
    deliveryMessage.classList.remove("paid");
  } else {
    deliveryMessage.classList.add("paid");
    deliveryMessage.classList.remove("free");
  }

  stockMessage.textContent = getStockText(hasStock);

  if (!hasStock) {
    stockMessage.classList.add("soldout");
    likeBtn.disabled = true;
  }
}

function updateLikeMessage() {
  if (count >= 3) {
    message.textContent = "이 상품을 많이 관심 있어 하시네요!";
  } else {
    message.textContent = `이 상품을 ${count}번 찜했습니다.`;
  }
}

function resetLike() {
  count = 0;
  likeCount.textContent = count;
  message.textContent = "상품 정보가 준비되었습니다.";
  likeBtn.classList.remove("active");
}

// 4. 함수를 호출합니다.
renderProduct();

// 5. 이벤트 처리
likeBtn.addEventListener("click", () => {
  count += 1;

  likeCount.textContent = count;
  updateLikeMessage();
  likeBtn.classList.add("active");
});

resetBtn.addEventListener("click", () => {
  resetLike();
});
