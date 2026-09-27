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

// 3. for / forEach / map 비교
for (let i = 0; i < recommendedProducts.length; i += 1) {
  console.log("for:", recommendedProducts[i].name);
}

recommendedProducts.forEach((productItem) => {
  console.log("forEach:", productItem.name);
});

const productNames = recommendedProducts.map((productItem) => {
  return productItem.name;
});

console.log("map 결과:", productNames);

// 4. HTML 요소를 선택합니다.
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

// 5. 기능별 함수
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

// forEach 방식: 배열을 순회하면서 li를 직접 추가합니다.
function renderRecommendList() {
  recommendList.innerHTML = "";

  recommendedProducts.forEach((productItem, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <strong>${index + 1}. ${productItem.name}</strong>
      <div class="product-meta">
        ${formatPrice(productItem.price)} · ${productItem.category}
      </div>
    `;

    recommendList.appendChild(li);
  });

  productCount.textContent = recommendedProducts.length;
}

// map 방식: 상품 객체 배열을 HTML 문자열 배열로 변환합니다.
function renderProductCards() {
  const cardHTML = recommendedProducts.map((productItem) => {
    const finalPrice = calculateDiscountPrice(
      productItem.price,
      productItem.discountRate
    );

    return `
      <article class="mini-card">
        <strong>${productItem.name}</strong>
        <span>
          ${formatPrice(finalPrice)} · ${productItem.category}
        </span>
      </article>
    `;
  });

  productCards.innerHTML = cardHTML.join("");
}

function renderAllLists() {
  renderRecommendList();
  renderProductCards();
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

// 6. 초기 화면 출력
renderProduct(product);
renderAllLists();

// 7. 객체 배열 값 추가와 삭제
addProductBtn.addEventListener("click", () => {
  recommendedProducts.push({
    name: "기계식 키보드",
    price: 79000,
    category: "컴퓨터 주변기기",
    discountRate: 15,
  });

  renderAllLists();
});

removeProductBtn.addEventListener("click", () => {
  recommendedProducts.pop();
  renderAllLists();
});

// 8. 기존 찜하기 기능
likeBtn.addEventListener("click", () => {
  count += 1;

  likeCount.textContent = count;
  updateLikeMessage();
  likeBtn.classList.add("active");
});

resetBtn.addEventListener("click", () => {
  resetLike();
});
