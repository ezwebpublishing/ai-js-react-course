// SECTION 03 - 11차시
// events.js: 사용자 이벤트 연결을 담당합니다.

import { clearSelectedCards, selectCard, setStatus } from "./ui.js";

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
  });

  categorySelect.addEventListener("change", (event) => {
    const selectedCategory = event.target.value;
    setStatus(`선택한 카테고리: ${selectedCategory}`);
  });

  addProductBtn.addEventListener("click", () => {
    addProduct();
    render(getProducts());
    setStatus("상품을 추가했습니다.");
  });

  removeProductBtn.addEventListener("click", () => {
    removeLastProduct();
    render(getProducts());
    setStatus("마지막 상품을 삭제했습니다.");
  });

  clearSelectionBtn.addEventListener("click", () => {
    clearSelectedCards();
    setStatus("상품 선택을 해제했습니다.");
  });
};
