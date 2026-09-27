// SECTION 01 - 03차시
// JavaScript 시작하기: console, 변수, 자료형

console.log("JavaScript 파일이 연결되었습니다.");

// 1. 상품 정보를 변수로 저장합니다.
// 바뀌지 않는 값은 const를 사용합니다.
const productName = "무선 헤드폰";
const productDescription = "가볍게 즐기는 데일리 무선 헤드폰";
const productPrice = 89000;
const isBest = true;

// 2. 나중에 바뀔 수 있는 값은 let을 사용합니다.
let count = 0;

// 3. 콘솔에서 값과 자료형을 확인합니다.
console.log(productName);
console.log(productPrice);
console.log(isBest);

console.log(typeof productName);
console.log(typeof productPrice);
console.log(typeof isBest);
console.log(typeof count);

// 4. HTML 요소를 선택합니다.
const badge = document.querySelector("#badge");
const productNameElement = document.querySelector("#productName");
const productDescriptionElement = document.querySelector("#productDescription");
const priceElement = document.querySelector("#price");
const message = document.querySelector("#message");
const likeBtn = document.querySelector("#likeBtn");
const likeCount = document.querySelector("#likeCount");
const resetBtn = document.querySelector("#resetBtn");

// 5. 변수에 저장한 상품 정보를 화면에 출력합니다.
productNameElement.textContent = productName;
productDescriptionElement.textContent = productDescription;
priceElement.textContent = `${productPrice.toLocaleString()}원`;

if (isBest) {
  badge.textContent = "BEST";
} else {
  badge.textContent = "NORMAL";
}

// 6. 기존 찜하기 기능을 유지합니다.
likeBtn.addEventListener("click", () => {
  count += 1;

  likeCount.textContent = count;
  message.textContent = `이 상품을 ${count}번 찜했습니다.`;
  likeBtn.classList.add("active");
});

resetBtn.addEventListener("click", () => {
  count = 0;

  likeCount.textContent = count;
  message.textContent = "상품 정보가 준비되었습니다.";
  likeBtn.classList.remove("active");
});
