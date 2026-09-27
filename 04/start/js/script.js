// SECTION 02 - 04차시
// 연산자와 조건문

console.log("04차시: 연산자와 조건문");

// 1. 상품 정보를 변수로 저장합니다.
const productName = "무선 헤드폰";
const productDescription = "가볍게 즐기는 데일리 무선 헤드폰";
const productPrice = 89000;

// TODO 01
// 할인율과 재고 여부를 변수로 저장하세요.
//
// discountRate: 20
// isBest: true
// hasStock: true


// TODO 02
// 연산자를 사용해 할인 금액과 최종 가격을 계산하세요.
//
// discountAmount = 상품 가격 * (할인율 / 100)
// finalPrice = 상품 가격 - 할인 금액


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

// 3. 기본 상품 정보를 화면에 출력합니다.
productNameElement.textContent = productName;
productDescriptionElement.textContent = productDescription;
priceElement.textContent = `${productPrice.toLocaleString()}원`;

// TODO 03
// finalPrice를 화면에 출력하세요.
// 힌트: finalPriceElement.textContent = `${finalPrice.toLocaleString()}원`;


// TODO 04
// isBest가 true이면 badge에 "BEST"를,
// false이면 "NORMAL"을 출력하세요.


// TODO 05
// discountRate가 0보다 크면 할인 배지를 보여주세요.
// 출력 예: "20% SALE"
// 그렇지 않으면 discountBadge에 hidden 클래스를 추가하세요.


// TODO 06
// finalPrice가 50000 이상이면 "무료배송 상품입니다."
// 아니면 "배송비 3,000원이 추가됩니다."를 출력하세요.
// 조건에 따라 free 또는 paid 클래스를 추가하세요.


// TODO 07
// hasStock이 true이면 "구매 가능한 상품입니다."
// false이면 "현재 품절된 상품입니다."를 출력하고,
// soldout 클래스를 추가한 뒤 likeBtn.disabled = true로 설정하세요.


// 4. 기존 찜하기 기능을 유지합니다.
likeBtn.addEventListener("click", () => {
  count += 1;

  likeCount.textContent = count;

  // TODO 08
  // count가 3 이상이면 "이 상품을 많이 관심 있어 하시네요!"를 출력하고,
  // 그렇지 않으면 기존 찜하기 문구를 출력하세요.

  likeBtn.classList.add("active");
});

resetBtn.addEventListener("click", () => {
  count = 0;

  likeCount.textContent = count;
  message.textContent = "상품 정보가 준비되었습니다.";
  likeBtn.classList.remove("active");
});
