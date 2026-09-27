// SECTION 02 - 04차시
// 연산자와 조건문

console.log("04차시: 연산자와 조건문");

// 1. 상품 정보를 변수로 저장합니다.
const productName = "무선 헤드폰";
const productDescription = "가볍게 즐기는 데일리 무선 헤드폰";
const productPrice = 89000;
const discountRate = 20;
const isBest = true;
const hasStock = true;

// 2. 연산자를 사용해 할인 가격을 계산합니다.
const discountAmount = productPrice * (discountRate / 100);
const finalPrice = productPrice - discountAmount;

// 3. 나중에 바뀔 수 있는 값은 let을 사용합니다.
let count = 0;

// 4. HTML 요소를 선택합니다.
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

// 5. 변수에 저장한 상품 정보를 화면에 출력합니다.
productNameElement.textContent = productName;
productDescriptionElement.textContent = productDescription;
priceElement.textContent = `${productPrice.toLocaleString()}원`;
finalPriceElement.textContent = `${finalPrice.toLocaleString()}원`;

if (isBest) {
  badge.textContent = "BEST";
} else {
  badge.textContent = "NORMAL";
}

// 6. 할인율이 0보다 크면 할인 배지를 보여줍니다.
if (discountRate > 0) {
  discountBadge.textContent = `${discountRate}% SALE`;
  discountBadge.classList.remove("hidden");
} else {
  discountBadge.classList.add("hidden");
}

// 7. 최종 가격이 50,000원 이상이면 무료배송 문구를 출력합니다.
if (finalPrice >= 50000) {
  deliveryMessage.textContent = "무료배송 상품입니다.";
  deliveryMessage.classList.add("free");
} else {
  deliveryMessage.textContent = "배송비 3,000원이 추가됩니다.";
  deliveryMessage.classList.add("paid");
}

// 8. 재고 여부에 따라 구매 가능 문구를 출력합니다.
if (hasStock) {
  stockMessage.textContent = "구매 가능한 상품입니다.";
} else {
  stockMessage.textContent = "현재 품절된 상품입니다.";
  stockMessage.classList.add("soldout");
  likeBtn.disabled = true;
}

// 9. 기존 찜하기 기능을 유지합니다.
likeBtn.addEventListener("click", () => {
  count += 1;

  likeCount.textContent = count;

  if (count >= 3) {
    message.textContent = "이 상품을 많이 관심 있어 하시네요!";
  } else {
    message.textContent = `이 상품을 ${count}번 찜했습니다.`;
  }

  likeBtn.classList.add("active");
});

resetBtn.addEventListener("click", () => {
  count = 0;

  likeCount.textContent = count;
  message.textContent = "상품 정보가 준비되었습니다.";
  likeBtn.classList.remove("active");
});
