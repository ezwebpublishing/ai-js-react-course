// SECTION 03 - 12차시
// events.js: 사용자 이벤트 연결을 담당합니다.

import {
  applyCardStyles,
  clearCardStyles,
  clearSelectedCards,
  resetStatus,
  selectCard,
  setStatus,
} from "./ui.js";

export const bindEvents = ({
  getProducts,
  render,
  addProduct,
  removeLastProduct,
}) => {
  const productList = document.querySelector("#productList");
  const keywordInput = document.querySelector("#keywordInput");
  const categorySelect = document.querySelector("#categorySelect");
  const addProductBtn = document.querySelector("#addProductBtn");
  const removeProductBtn = document.querySelector("#removeProductBtn");
  const clearSelectionBtn = document.querySelector("#clearSelectionBtn");
  const resetStyleBtn = document.querySelector("#resetStyleBtn");

  // TODO 04
  // 현재 검색어와 카테고리 값을 기준으로 카드 스타일을 적용하는 함수를 만드세요.
  // 함수 이름: updateCardStyles
  // applyCardStyles({ keyword: keywordInput.value, category: categorySelect.value }) 호출

  const updateCardStyles = () => {

  };

  productList.addEventListener("click", (event) => {
    const card = event.target.closest(".product-card");

    if (!card) return;

    selectCard(card);
  });

  keywordInput.addEventListener("input", (event) => {
    const keyword = event.target.value.trim();

    if (keyword) {
      setStatus(`입력한 검색어: ${keyword}`);
    } else {
      setStatus("검색어를 입력해보세요.");
    }

    // TODO 05
    // 검색어가 바뀔 때 카드 스타일도 다시 적용하세요.
  });

  categorySelect.addEventListener("change", (event) => {
    const selectedCategory = event.target.value;

    setStatus(`선택한 카테고리: ${selectedCategory}`);

    // TODO 06
    // 카테고리가 바뀔 때 카드 스타일도 다시 적용하세요.
  });

  addProductBtn.addEventListener("click", () => {
    addProduct();
    render(getProducts());

    // TODO 07
    // 상품 추가 후 현재 검색/카테고리 조건을 다시 적용하세요.

    setStatus("상품을 추가했습니다.");
  });

  removeProductBtn.addEventListener("click", () => {
    removeLastProduct();
    render(getProducts());

    // TODO 08
    // 상품 삭제 후 현재 검색/카테고리 조건을 다시 적용하세요.

    setStatus("마지막 상품을 삭제했습니다.");
  });

  clearSelectionBtn.addEventListener("click", () => {
    clearSelectedCards();
    setStatus("상품 선택을 해제했습니다.");
  });

  // TODO 09
  // resetStyleBtn 클릭 이벤트를 완성하세요.
  // 해야 할 일:
  // 1. keywordInput.value = "";
  // 2. categorySelect.value = "전체";
  // 3. clearCardStyles();
  // 4. resetStatus();

};
