// SECTION 02 - 07차시
// 객체 이해하기

console.log("07차시: 객체 이해하기");

// TODO 01
// 흩어진 상품 정보를 하나의 product 객체로 묶으세요.
//
// 필요한 property:
// name: "무선 헤드폰"
// description: "가볍게 즐기는 데일리 무선 헤드폰"
// price: 89000
// discountRate: 20
// category: "전자제품"
// isBest: true
// hasStock: true


let count = 0;

// TODO 02
// 추천 상품을 객체 배열로 저장하세요.
// 배열 이름: recommendedProducts
//
// 각 상품 객체는 name, price, category를 가집니다.
//
// 1) 무선 헤드폰 / 89000 / 전자제품
// 2) 스마트 워치 / 129000 / 전자제품
// 3) 블루투스 스피커 / 59000 / 음향기기


// TODO 03
// console.log()로 아래 값을 확인하세요.
// 1. product 전체
// 2. product.name
// 3. recommendedProducts[0]
// 4. recommendedProducts[0].name


// 1. HTML 요소를 선택합니다.
const badge = document.querySelector("#badge");
const discountBadge = document.querySelector("#discountBadge");
const productNameElement = document.querySelector("#productName");
const productDescriptionElement = document.querySelector("#productDescription");
const priceElement = document.querySelector("#price");
const finalPriceElement = document.querySelector("#finalPrice");
const categoryMessage = document.querySelector("#categoryMessage");
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

// 2. 기능별 함수
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

// TODO 04
// renderProduct 함수를 수정하세요.
// 매개변수 이름: productData
//
// 기존의 productName, productPrice 같은 개별 변수 대신
// productData.name
// productData.description
// productData.price
// productData.discountRate
// productData.category
// productData.isBest
// productData.hasStock
// 형태로 접근하세요.

function renderProduct(productData) {
  // 여기에 코드를 작성하세요.
}


// TODO 05
// 추천 상품 객체 배열을 화면에 출력하는 함수를 완성하세요.
// 함수 이름: renderRecommendList
//
// 해야 할 일:
// 1. recommendList.innerHTML = ""; 로 기존 목록 비우기
// 2. for 반복문으로 recommendedProducts 순회
// 3. const productItem = recommendedProducts[i];
// 4. li 요소 생성
// 5. 상품명, 가격, 카테고리를 li에 출력
// 6. productCount에 배열 길이 출력

function renderRecommendList() {
  // 여기에 코드를 작성하세요.
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

// TODO 06
// renderProduct(product)를 호출하세요.


// TODO 07
// renderRecommendList()를 호출하세요.


// TODO 08
// addProductBtn 클릭 이벤트를 등록하세요.
// 클릭하면 recommendedProducts 배열에 아래 객체를 push()로 추가하세요.
//
// {
//   name: "기계식 키보드",
//   price: 79000,
//   category: "컴퓨터 주변기기"
// }
//
// 추가 후 renderRecommendList()를 다시 호출하세요.


// TODO 09
// removeProductBtn 클릭 이벤트를 등록하세요.
// 클릭하면 recommendedProducts 배열의 마지막 값을 pop()으로 삭제하고,
// renderRecommendList()를 다시 호출하세요.


// 3. 기존 찜하기 기능
likeBtn.addEventListener("click", () => {
  count += 1;

  likeCount.textContent = count;
  updateLikeMessage();
  likeBtn.classList.add("active");
});

resetBtn.addEventListener("click", () => {
  resetLike();
});
