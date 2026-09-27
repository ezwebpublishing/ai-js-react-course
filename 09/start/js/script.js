// SECTION 02 - 09차시
// React를 위한 최신 JavaScript

console.log("09차시: React를 위한 최신 JavaScript");

// 1. 하나의 상품 정보를 객체로 묶습니다.
const product = {
  name: "무선 헤드폰",
  description: "가볍게 즐기는 데일리 무선 헤드폰",
  price: 89000,
  discountRate: 20,
  category: "전자제품",
  isBest: true,
  hasStock: true,
};

let count = 0;

// React에서는 배열 상태를 직접 바꾸지 않고 새 배열로 만드는 흐름을 자주 사용합니다.
let recommendedProducts = [
  {
    name: "무선 헤드폰",
    price: 89000,
    category: "전자제품",
    discountRate: 20,
  },
  {
    name: "스마트 워치",
    price: 129000,
    category: "전자제품",
    discountRate: 10,
  },
  {
    name: "블루투스 스피커",
    price: 59000,
    category: "음향기기",
    discountRate: 0,
  },
];

// TODO 01
// function 선언으로 작성된 함수를 화살표 함수로 바꾸세요.
// 함수 이름: formatPrice
// 기능: 숫자를 "89,000원" 형식으로 반환


// TODO 02
// calculateDiscountPrice 함수를 화살표 함수로 작성하세요.
// 매개변수: price, rate = 0
// 기능: 할인 가격 계산 후 return


// TODO 03
// getDeliveryText 함수를 화살표 함수와 삼항연산자로 작성하세요.
// 조건: price >= 50000
// true: "무료배송 상품입니다."
// false: "배송비 3,000원이 추가됩니다."


// TODO 04
// getStockText 함수를 화살표 함수와 삼항연산자로 작성하세요.
// 조건: stock
// true: "구매 가능한 상품입니다."
// false: "현재 품절된 상품입니다."


// 2. HTML 요소를 선택합니다.
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
const productCards = document.querySelector("#productCards");
const productCount = document.querySelector("#productCount");
const addProductBtn = document.querySelector("#addProductBtn");
const removeProductBtn = document.querySelector("#removeProductBtn");
const message = document.querySelector("#message");
const likeBtn = document.querySelector("#likeBtn");
const likeCount = document.querySelector("#likeCount");
const resetBtn = document.querySelector("#resetBtn");

// TODO 05
// renderProduct 함수를 화살표 함수로 작성하세요.
// productData를 매개변수로 받고,
// 구조분해 할당으로 name, description, price, discountRate, category, isBest, hasStock을 꺼내세요.
//
// badge.textContent는 삼항연산자를 사용하세요.
// 예: badge.textContent = isBest ? "BEST" : "NORMAL";


// TODO 06
// renderRecommendList 함수를 화살표 함수로 작성하세요.
// forEach의 매개변수에서 구조분해 할당을 사용하세요.
// 예: recommendedProducts.forEach(({ name, price, category }, index) => { ... });


// TODO 07
// renderProductCards 함수를 화살표 함수로 작성하세요.
// map의 매개변수에서 구조분해 할당을 사용하세요.
// 예: ({ name, price, category, discountRate }) => { ... }


// TODO 08
// renderAllLists 함수를 화살표 함수로 작성하세요.
// 내부에서 renderRecommendList(), renderProductCards()를 호출합니다.


// TODO 09
// updateLikeMessage 함수를 화살표 함수로 작성하세요.
// if / else 대신 삼항연산자로 message.textContent를 설정하세요.


// TODO 10
// resetLike 함수를 화살표 함수로 작성하세요.
// count, likeCount, message, active 클래스를 초기화합니다.


// 3. 초기 화면 출력
// TODO 11
// renderProduct(product)와 renderAllLists()를 호출하세요.


// TODO 12
// addProductBtn 클릭 이벤트를 등록하세요.
// push() 대신 spread를 사용해 새 배열을 만드세요.
//
// const newProduct = { ... };
// recommendedProducts = [...recommendedProducts, newProduct];


// TODO 13
// removeProductBtn 클릭 이벤트를 등록하세요.
// pop() 대신 slice(0, -1)을 사용해 마지막 상품을 제외한 새 배열을 만드세요.


// TODO 14
// likeBtn 클릭 이벤트를 등록하세요.
// count 증가, likeCount 출력, updateLikeMessage 호출, active 클래스 추가


// TODO 15
// resetBtn 클릭 이벤트를 등록하세요.
// resetLike() 호출
