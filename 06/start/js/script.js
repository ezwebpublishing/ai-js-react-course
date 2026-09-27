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

// TODO 01
// 추천 상품명을 배열로 저장하세요.
// 배열 이름: recommendedProducts
// 값: "무선 헤드폰", "스마트 워치", "블루투스 스피커"


// TODO 02
// console.log()로 아래 값을 확인하세요.
// 1. recommendedProducts 전체
// 2. recommendedProducts[0]
// 3. recommendedProducts.length


// 2. HTML 요소를 선택합니다.
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

// 3. 기능별 함수
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

// TODO 03
// 추천 상품 배열을 화면에 출력하는 함수를 만드세요.
// 함수 이름: renderRecommendList
//
// 해야 할 일:
// 1. recommendList.innerHTML = ""; 로 기존 목록 비우기
// 2. for 반복문으로 recommendedProducts 배열 순회
// 3. li 요소 생성
// 4. li.textContent = `${i + 1}. ${recommendedProducts[i]}`;
// 5. recommendList에 li 추가
// 6. productCount에 배열의 길이 출력


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

// 4. 초기 화면 출력
renderProduct();

// TODO 04
// renderRecommendList() 함수를 호출하세요.


// TODO 05
// addProductBtn 클릭 이벤트를 등록하세요.
// 클릭하면 recommendedProducts 배열에 "기계식 키보드"를 push()로 추가하고,
// renderRecommendList()를 다시 호출하세요.


// TODO 06
// removeProductBtn 클릭 이벤트를 등록하세요.
// 클릭하면 recommendedProducts 배열의 마지막 값을 pop()으로 삭제하고,
// renderRecommendList()를 다시 호출하세요.


// 5. 기존 찜하기 기능
likeBtn.addEventListener("click", () => {
  count += 1;

  likeCount.textContent = count;
  updateLikeMessage();
  likeBtn.classList.add("active");
});

resetBtn.addEventListener("click", () => {
  resetLike();
});
