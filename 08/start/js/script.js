// SECTION 02 - 08차시
// 반복문에서 map까지

console.log("08차시: 반복문에서 map까지");

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

// 2. 추천 상품을 객체 배열로 저장합니다.
const recommendedProducts = [
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
// for 반복문을 사용해 recommendedProducts의 상품명을 콘솔에 출력하세요.
// 출력 예: console.log("for:", recommendedProducts[i].name);


// TODO 02
// forEach()를 사용해 recommendedProducts의 상품명을 콘솔에 출력하세요.
// 출력 예: console.log("forEach:", productItem.name);


// TODO 03
// map()을 사용해 상품명만 담긴 새로운 배열 productNames를 만드세요.
// 그리고 productNames를 console.log()로 확인하세요.


// 3. HTML 요소를 선택합니다.
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

function renderProduct(productData) {
  const finalPrice = calculateDiscountPrice(
    productData.price,
    productData.discountRate
  );

  productNameElement.textContent = productData.name;
  productDescriptionElement.textContent = productData.description;
  priceElement.textContent = formatPrice(productData.price);
  finalPriceElement.textContent = formatPrice(finalPrice);
  categoryMessage.textContent = `카테고리: ${productData.category}`;
  categoryMessage.classList.add("category");

  if (productData.isBest) {
    badge.textContent = "BEST";
  } else {
    badge.textContent = "NORMAL";
  }

  if (productData.discountRate > 0) {
    discountBadge.textContent = `${productData.discountRate}% SALE`;
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

  stockMessage.textContent = getStockText(productData.hasStock);

  if (!productData.hasStock) {
    stockMessage.classList.add("soldout");
    likeBtn.disabled = true;
  }
}

// TODO 04
// forEach 방식으로 추천 상품 목록을 출력하는 함수를 완성하세요.
// 함수 이름: renderRecommendList
//
// 해야 할 일:
// 1. recommendList.innerHTML = ""; 로 기존 목록 비우기
// 2. recommendedProducts.forEach((productItem, index) => { ... }) 작성
// 3. li 요소 생성
// 4. li.innerHTML에 상품명, 가격, 카테고리 출력
// 5. recommendList.appendChild(li)
// 6. productCount에 배열 길이 출력

function renderRecommendList() {
  // 여기에 코드를 작성하세요.
}

// TODO 05
// map 방식으로 상품 카드 HTML을 만드는 함수를 완성하세요.
// 함수 이름: renderProductCards
//
// 해야 할 일:
// 1. recommendedProducts.map()으로 HTML 문자열 배열 만들기
// 2. 각 상품의 최종 가격 계산하기
// 3. article.mini-card 구조의 문자열 return하기
// 4. productCards.innerHTML = cardHTML.join("");

function renderProductCards() {
  // 여기에 코드를 작성하세요.
}

// TODO 06
// renderRecommendList()와 renderProductCards()를 한 번에 호출하는
// renderAllLists 함수를 만드세요.

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
renderProduct(product);

// TODO 07
// renderAllLists() 함수를 호출하세요.


// TODO 08
// addProductBtn 클릭 이벤트를 등록하세요.
// 클릭하면 recommendedProducts 배열에 아래 객체를 push()로 추가하세요.
//
// {
//   name: "기계식 키보드",
//   price: 79000,
//   category: "컴퓨터 주변기기",
//   discountRate: 15
// }
//
// 추가 후 renderAllLists()를 다시 호출하세요.


// TODO 09
// removeProductBtn 클릭 이벤트를 등록하세요.
// 클릭하면 recommendedProducts 배열의 마지막 값을 pop()으로 삭제하고,
// renderAllLists()를 다시 호출하세요.


// 6. 기존 찜하기 기능
likeBtn.addEventListener("click", () => {
  count += 1;

  likeCount.textContent = count;
  updateLikeMessage();
  likeBtn.classList.add("active");
});

resetBtn.addEventListener("click", () => {
  resetLike();
});
