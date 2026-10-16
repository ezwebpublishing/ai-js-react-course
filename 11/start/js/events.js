// SECTION 03 - 11차시
// events.js: 사용자 이벤트 연결을 담당합니다.

import { clearSelectedCards, selectCard, setStatus } from "./ui.js";

export const bindEvents = ({ getProducts, render, addProduct, removeLastProduct }) => {
  const productList = document.querySelector("#productList");
  const keywordInput = document.querySelector("#keywordInput");
  const categorySelect = document.querySelector("#categorySelect");
  const addProductBtn = document.querySelector("#addProductBtn");
  const removeProductBtn = document.querySelector("#removeProductBtn");
  const clearSelectionBtn = document.querySelector("#clearSelectionBtn");

  // TODO 09
  // productList에 click 이벤트를 연결하세요.
  // event.target.closest(".product-card")로 클릭한 상품 카드를 찾고,
  // 카드가 있으면 selectCard(card)를 호출하세요.

  productList.addEventListener("click", event => {
    const card = event.target.closest(".product-card");
    if (!card) return;
    selectCard(card);
  });

  // TODO 10
  // keywordInput에 input 이벤트를 연결하세요.
  // event.target.value.trim()으로 입력값을 가져오고
  // 입력값이 있으면 "입력한 검색어: ..." 문구를 출력하세요.
  keywordInput.addEventListener("input", event => {
    const keyword = event.target.value.trim();
    if (keyword) {
      setStatus(`입력한 검색어: ${keyword}`);
    } else {
      setStatus("검색어를 입력해보세요");
    }
  });

  // TODO 11
  // categorySelect에 change 이벤트를 연결하세요.
  // 선택한 카테고리 값을 상태 메시지에 출력하세요.
  categorySelect.addEventListener("change", event => {
    const selectedCategory = event.target.value;
    setStatus(`선택한 카테고리: ${selectedCategory}`);
  });

  // TODO 12
  // addProductBtn에 click 이벤트를 연결하세요.
  // addProduct(), render(getProducts()), setStatus() 순서로 실행합니다.

  addProductBtn.addEventListener("click", () => {
    addProduct();
    render(getProducts());
    setStatus("상품을 추가했습니다.");
  });

  // TODO 13
  // removeProductBtn에 click 이벤트를 연결하세요.
  // removeLastProduct(), render(getProducts()), setStatus() 순서로 실행합니다.

  removeProductBtn.addEventListener("click", () => {
    removeLastProduct();
    render(getProducts());
    setStatus("마지막 상품을 삭제했습니다.");
  });

  // TODO 14
  // clearSelectionBtn에 click 이벤트를 연결하세요.
  // clearSelectedCards()와 setStatus()를 호출합니다.
  clearSelectionBtn.addEventListener("click", () => {
    clearSelectedCards();
    setStatus("상품 선택을 해제했습니다.");
  });
};
