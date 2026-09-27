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

// TODO 01
// 가격을 받아 "89,000원" 형식으로 바꿔주는 함수를 만드세요.
// 함수 이름: formatPrice
// 매개변수: price
// return: `${price.toLocaleString()}원`


// TODO 02
// 상품 가격과 할인율을 받아 최종 가격을 계산하는 함수를 만드세요.
// 함수 이름: calculateDiscountPrice
// 매개변수: price, rate
// 힌트:
// const discountAmount = price * (rate / 100);
// return price - discountAmount;


// TODO 03
// 최종 가격을 받아 배송 문구를 반환하는 함수를 만드세요.
// 함수 이름: getDeliveryText
// 조건:
// price가 50000 이상이면 "무료배송 상품입니다."
// 그렇지 않으면 "배송비 3,000원이 추가됩니다."


// TODO 04
// 재고 여부를 받아 구매 가능 문구를 반환하는 함수를 만드세요.
// 함수 이름: getStockText
// 조건:
// stock이 true이면 "구매 가능한 상품입니다."
// 그렇지 않으면 "현재 품절된 상품입니다."


// TODO 05
// 상품 정보를 화면에 출력하는 함수를 만드세요.
// 함수 이름: renderProduct
//
// 함수 안에서 해야 할 일:
// 1. calculateDiscountPrice()로 최종 가격 계산
// 2. 상품명, 설명, 원래 가격, 최종 가격 출력
// 3. BEST / NORMAL 표시
// 4. 할인율이 있으면 할인 배지 출력
// 5. getDeliveryText()로 배송 문구 출력
// 6. getStockText()로 재고 문구 출력


// TODO 06
// 찜 횟수에 따라 안내 문구를 변경하는 함수를 만드세요.
// 함수 이름: updateLikeMessage
// 조건:
// count가 3 이상이면 "이 상품을 많이 관심 있어 하시네요!"
// 그렇지 않으면 `이 상품을 ${count}번 찜했습니다.`


// TODO 07
// 찜하기 상태를 초기화하는 함수를 만드세요.
// 함수 이름: resetLike
// 해야 할 일:
// count를 0으로 변경
// likeCount를 0으로 변경
// message를 기본 문구로 변경
// likeBtn에서 active 클래스 제거


// TODO 08
// renderProduct() 함수를 호출하세요.


// 3. 이벤트 처리
likeBtn.addEventListener("click", () => {
  count += 1;

  likeCount.textContent = count;

  // TODO 09
  // updateLikeMessage() 함수를 호출하세요.

  likeBtn.classList.add("active");
});

resetBtn.addEventListener("click", () => {
  // TODO 10
  // resetLike() 함수를 호출하세요.
});
