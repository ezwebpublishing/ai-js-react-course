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

// 2. 추천 상품을 객체 배열로 저장합니다.
// React에서는 상태를 직접 바꾸지 않고 새 배열을 만드는 흐름을 자주 사용합니다.
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

// 3. 화살표 함수
const formatPrice = (price) => `${price.toLocaleString()}원`;

const calculateDiscountPrice = (price, rate = 0) => {
  const discountAmount = price * (rate / 100);
  return price - discountAmount;
};

const getDeliveryText = (price) =>
  price >= 50000 ? "무료배송 상품입니다." : "배송비 3,000원이 추가됩니다.";

const getStockText = (stock) =>
  stock ? "구매 가능한 상품입니다." : "현재 품절된 상품입니다.";

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

// 5. 구조분해 할당을 사용합니다.
const renderProduct = (productData) => {
  const {
    name,
    description,
    price,
    discountRate,
    category,
    isBest,
    hasStock,
  } = productData;

  const finalPrice = calculateDiscountPrice(price, discountRate);

  productNameElement.textContent = name;
  productDescriptionElement.textContent = description;
  priceElement.textContent = formatPrice(price);
  finalPriceElement.textContent = formatPrice(finalPrice);
  categoryMessage.textContent = `카테고리: ${category}`;
  categoryMessage.classList.add("category");

  badge.textContent = isBest ? "BEST" : "NORMAL";

  if (discountRate > 0) {
    discountBadge.textContent = `${discountRate}% SALE`;
    discountBadge.classList.remove("hidden");
  } else {
    discountBadge.classList.add("hidden");
  }

  deliveryMessage.textContent = getDeliveryText(finalPrice);
  deliveryMessage.classList.toggle("free", finalPrice >= 50000);
  deliveryMessage.classList.toggle("paid", finalPrice < 50000);

  stockMessage.textContent = getStockText(hasStock);

  if (!hasStock) {
    stockMessage.classList.add("soldout");
    likeBtn.disabled = true;
  }
};

// forEach 방식: 배열을 순회하면서 li를 직접 추가합니다.
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

// map 방식: 상품 객체 배열을 HTML 문자열 배열로 변환합니다.
const renderProductCards = () => {
  const cardHTML = recommendedProducts.map(
    ({ name, price, category, discountRate }) => {
      const finalPrice = calculateDiscountPrice(price, discountRate);

      return `
        <article class="mini-card">
          <strong>${name}</strong>
          <span>
            ${formatPrice(finalPrice)} · ${category}
          </span>
        </article>
      `;
    }
  );

  productCards.innerHTML = cardHTML.join("");
};

const renderAllLists = () => {
  renderRecommendList();
  renderProductCards();
};

const updateLikeMessage = () => {
  message.textContent =
    count >= 3
      ? "이 상품을 많이 관심 있어 하시네요!"
      : `이 상품을 ${count}번 찜했습니다.`;
};

const resetLike = () => {
  count = 0;
  likeCount.textContent = count;
  message.textContent = "상품 정보가 준비되었습니다.";
  likeBtn.classList.remove("active");
};

// 6. 초기 화면 출력
renderProduct(product);
renderAllLists();

// 7. spread를 사용해 새 배열을 만듭니다.
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

removeProductBtn.addEventListener("click", () => {
  recommendedProducts = recommendedProducts.slice(0, -1);

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
