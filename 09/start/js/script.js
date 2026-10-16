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
/*
function formatPrice(price){
  return `${price.toLocalString()}원`;
}
*/
const formatPrice = price => `${price.toLocaleString()}원`;

// TODO 02
// calculateDiscountPrice 함수를 화살표 함수로 작성하세요.
// 매개변수: price, rate = 0
// 기능: 할인 가격 계산 후 return
/*
function calculateDiscountPrice(price, rate) {
  const discountAmount = price * (rate / 100);
  return price - discountAmount;
}
*/
const calculateDiscountPrice = (price, rate) => {
  const discountAmount = price * (rate / 100);
  return price - discountAmount;
};

// TODO 03
// getDeliveryText 함수를 화살표 함수와 삼항연산자로 작성하세요.
// 조건: price >= 50000
// true: "무료배송 상품입니다."
// false: "배송비 3,000원이 추가됩니다."
/*
function getDeliveryText(price) {
  if (price >= 50000) {
    return "무료배송 상품입니다.";
  }

  return "배송비 3,000원이 추가됩니다.";
}
  조건 ? 참 : 거짓;
*/
const getDeliveryText = price =>
  price >= 50000 ? "무료배송 상품입니다." : "배송비 3,000원이 추가됩니다.";

// TODO 04
// getStockText 함수를 화살표 함수와 삼항연산자로 작성하세요.
// 조건: stock
// true: "구매 가능한 상품입니다."
// false: "현재 품절된 상품입니다."
/*
function getStockText(stock) {
  if (stock) {
    return "구매 가능한 상품입니다.";
  }

    return "현재 품절된 상품입니다.";
}
*/
const getStockText = stock => (stock ? "구매 가능한 상품입니다." : "현재 품절된 상품입니다.");

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
const renderProduct = productData => {
  const { name, description, price, discountRate, category, isBest, hasStock } = productData;

  const finalPrice = calculateDiscountPrice(price, discountRate);

  productNameElement.textContent = name;
  productDescriptionElement.textContent = description;
  priceElement.textContent = formatPrice(price);
  finalPriceElement.textContent = formatPrice(finalPrice);
  categoryMessage.textContent = `카테고리: ${category}`;
  categoryMessage.classList.add("category");

  badge.textContent = isBest ? "BEST" : "NORMAL";
  stockMessage.textContent = getStockText(hasStock);

  if (!hasStock) {
    stockMessage.classList.add("soldout");
    likeBtn.disabled = true;
  }
};

// TODO 06
// renderRecommendList 함수를 화살표 함수로 작성하세요.
// forEach의 매개변수에서 구조분해 할당을 사용하세요.
// 예: recommendedProducts.forEach(({ name, price, category }, index) => { ... });

const renderRecommendList = () => {
  recommendList.innerHTML = "";
  recommendedProducts.forEach(({ name, price, category }, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${index + 1}. ${name}</strong>
      <div class="product-meta">
        ${formatPrice(price)} · ${category}
      </div>
    `;
    recommendList.appendChild(li);
  });
  productCount.textContent = recommendedProducts.length;
};

// TODO 07
// renderProductCards 함수를 화살표 함수로 작성하세요.
// map의 매개변수에서 구조분해 할당을 사용하세요.
// 예: ({ name, price, category, discountRate }) => { ... }
const renderProductCards = () => {
  const cardHTML = recommendedProducts.map(({ name, price, category, discountRate }) => {
    const finalPrice = calculateDiscountPrice(price, discountRate);
    return `
      <article class="mini-card">
        <strong>${name}</strong>
        <span>
          ${formatPrice(price)} - ${category}
        </span>
      </article>
    `;
  });
  productCards.innerHTML = cardHTML.join("");
};

// TODO 08
// renderAllLists 함수를 화살표 함수로 작성하세요.
// 내부에서 renderRecommendList(), renderProductCards()를 호출합니다.

const renderAllLists = () => {
  renderRecommendList();
  renderProductCards();
};

// TODO 09
// updateLikeMessage 함수를 화살표 함수로 작성하세요.
// if / else 대신 삼항연산자로 message.textContent를 설정하세요.
const updateLikeMessage = () => {
  message.textContent =
    count >= 3 ? "이 상품을 많이 관심 있어 하시네요!" : `이 상품을 ${count}번 찜했습니다.`;
};

// TODO 10
// resetLike 함수를 화살표 함수로 작성하세요.
// count, likeCount, message, active 클래스를 초기화합니다.
const resetLike = () => {
  count = 0;
  likeCount.textContent = count;
  message.textContent = "상품 정보가 준비되었습니다.";
  likeBtn.classList.remove("active");
};

// 3. 초기 화면 출력
// TODO 11
// renderProduct(product)와 renderAllLists()를 호출하세요.
renderProduct(product);
renderAllLists();

// TODO 12
// addProductBtn 클릭 이벤트를 등록하세요.
// push() 대신 spread를 사용해 새 배열을 만드세요.
//
// const newProduct = { ... };
// recommendedProducts = [...recommendedProducts, newProduct];

addProductBtn.addEventListener("click", () => {
  const newProduct = {
    name: "기계식 키보드",
    price: 79000,
    category: "컴퓨터 주변기기",
    discountRate: 15,
  };

  recommendedProducts = [...recommendedProducts, newProduct];

  renderAllLists();
});

// TODO 13
// removeProductBtn 클릭 이벤트를 등록하세요.
// pop() 대신 slice(0, -1)을 사용해 마지막 상품을 제외한 새 배열을 만드세요.

removeProductBtn.addEventListener("click", () => {
  recommendedProducts = recommendedProducts.slice(0, -1);
  renderAllLists();
});

// TODO 14
// likeBtn 클릭 이벤트를 등록하세요.
// count 증가, likeCount 출력, updateLikeMessage 호출, active 클래스 추가

likeBtn.addEventListener("click", () => {
  count += 1;

  likeCount.textContent = count;
  updateLikeMessage();
  likeBtn.classList.add("active");
});

// TODO 15
// resetBtn 클릭 이벤트를 등록하세요.
// resetLike() 호출
resetBtn.addEventListener("click", () => {
  resetLike();
});
