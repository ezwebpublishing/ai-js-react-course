// SECTION 02 - 06차시
// 배열 이해하기

console.log("06차시: 배열 이해하기");

// 1. 상품 정보를 변수로 저장합니다.
const productName = "무선 헤드폰";
const productDescription = "가볍게 즐기는 데일리 무선 헤드폰";
const productPrice = 89000;
const discountRate = 20;
const isBest = true;
const hasStock = true;

let count = 0;

// 2. 추천 상품을 배열로 저장합니다.
const recommendedProducts = [
  "무선 헤드폰",
  "스마트 워치",
  "블루투스 스피커",
];

console.log(recommendedProducts);
console.log(recommendedProducts[0]);
console.log(recommendedProducts.length);

// 3. HTML 요소를 선택합니다.
const badge = document.querySelector("#badge");
const discountBadge = document.querySelector("#discountBadge");
const productNameElement = document.querySelector("#productName");
const productDescriptionElement = document.querySelector("#productDescription");
const priceElement = document.querySelector("#price");
const finalPriceElement = document.querySelector("#finalPrice");
const deliveryMessage = document.querySelector("#deliveryMessage");
const stockMessage = document.querySelector("#stockMessage");
const recommendList = document.querySelector("#recommendList");
const productCount = document.querySelector("#productCount");
const addProductBtn = document.querySelector("#addProductBtn");
const removeProductBtn = document.querySelector("#removeProductBtn");
const message = document.querySelector("#message");
const likeBtn = document.querySelector("#likeBtn");
const likeCount = document.querySelector("#likeCount");
const resetBtn = document.querySelector("#resetBtn");

// 4. 기능별 함수
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

function renderRecommendList() {
  recommendList.innerHTML = "";

  for (let i = 0; i < recommendedProducts.length; i += 1) {
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${recommendedProducts[i]}`;
    recommendList.appendChild(li);
  }

  productCount.textContent = recommendedProducts.length;
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

// 5. 초기 화면 출력
renderProduct();
renderRecommendList();

// 6. 배열 값 추가와 삭제
addProductBtn.addEventListener("click", () => {
  recommendedProducts.push("기계식 키보드");
  renderRecommendList();
});

removeProductBtn.addEventListener("click", () => {
  recommendedProducts.pop();
  renderRecommendList();
});

// 7. 기존 찜하기 기능
likeBtn.addEventListener("click", () => {
  count += 1;

  likeCount.textContent = count;
  updateLikeMessage();
  likeBtn.classList.add("active");
});

resetBtn.addEventListener("click", () => {
  resetLike();
});
