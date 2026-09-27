// SECTION 03 - 10차시
// HTML 요소 선택하기

console.log("10차시: HTML 요소 선택하기");

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

const formatPrice = (price) => `${price.toLocaleString()}원`;

const calculateDiscountPrice = (price, rate = 0) => {
  const discountAmount = price * (rate / 100);
  return price - discountAmount;
};

const getDeliveryText = (price) =>
  price >= 50000 ? "무료배송 상품입니다." : "배송비 3,000원이 추가됩니다.";

const getStockText = (stock) =>
  stock ? "구매 가능한 상품입니다." : "현재 품절된 상품입니다.";

// 기존 HTML 요소 선택
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

// TODO 01
// id가 selectionGuide인 요소를 선택하세요.


// TODO 02
// id가 selectFirstCardBtn인 버튼을 선택하세요.


// TODO 03
// id가 selectAllCardsBtn인 버튼을 선택하세요.


// TODO 04
// id가 clearSelectionBtn인 버튼을 선택하세요.


const addProductBtn = document.querySelector("#addProductBtn");
const removeProductBtn = document.querySelector("#removeProductBtn");
const message = document.querySelector("#message");
const likeBtn = document.querySelector("#likeBtn");
const likeCount = document.querySelector("#likeCount");
const resetBtn = document.querySelector("#resetBtn");

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

  // TODO 05
  // selectionGuide 문구를 "아직 선택된 카드가 없습니다."로 변경하세요.
};


// 10차시 핵심: HTML 요소를 선택하고 클래스 변경하기

// TODO 06
// clearSelectedCards 함수를 완성하세요.
//
// 해야 할 일:
// 1. document.querySelectorAll(".mini-card")로 모든 카드 선택
// 2. forEach로 각 card의 selected 클래스 제거
// 3. selectionGuide 문구를 "선택이 해제되었습니다."로 변경

const clearSelectedCards = () => {

};


// TODO 07
// selectFirstCard 함수를 완성하세요.
//
// 해야 할 일:
// 1. clearSelectedCards() 호출
// 2. document.querySelector(".mini-card")로 첫 번째 카드 선택
// 3. firstCard가 있으면 selected 클래스 추가
// 4. selectionGuide 문구를 "첫 번째 상품 카드가 선택되었습니다."로 변경

const selectFirstCard = () => {

};


// TODO 08
// selectAllCards 함수를 완성하세요.
//
// 해야 할 일:
// 1. document.querySelectorAll(".mini-card")로 모든 카드 선택
// 2. forEach로 각 card에 selected 클래스 추가
// 3. selectionGuide 문구에 선택된 카드 개수 출력

const selectAllCards = () => {

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

// 초기 화면 출력
renderProduct(product);
renderAllLists();

// 상품 추가 / 삭제
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

// TODO 09
// selectFirstCardBtn 클릭 이벤트를 등록하고 selectFirstCard 함수를 호출하세요.


// TODO 10
// selectAllCardsBtn 클릭 이벤트를 등록하고 selectAllCards 함수를 호출하세요.


// TODO 11
// clearSelectionBtn 클릭 이벤트를 등록하고 clearSelectedCards 함수를 호출하세요.


// 기존 찜하기 기능
likeBtn.addEventListener("click", () => {
  count += 1;

  likeCount.textContent = count;
  updateLikeMessage();
  likeBtn.classList.add("active");
});

resetBtn.addEventListener("click", () => {
  resetLike();
});
