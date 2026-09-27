// SECTION 03 - 14차시
// events.js: 사용자 이벤트와 검색 흐름을 연결합니다.

import { searchProducts } from "./search.js";
import {
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
  const resetSearchBtn = document.querySelector("#resetSearchBtn");

  let currentSearchResult = getProducts();

  const handleSearch = () => {
    const keyword = keywordInput.value;

    currentSearchResult = searchProducts(getProducts(), keyword);

    render(currentSearchResult, "검색 결과가 없습니다.");

    if (keyword.trim()) {
      setStatus(`"${keyword}" 검색 결과 ${currentSearchResult.length}개`);
    } else {
      setStatus("전체 상품을 표시합니다.");
    }
  };

  const resetSearch = () => {
    keywordInput.value = "";
    categorySelect.value = "전체";

    currentSearchResult = getProducts();

    render(currentSearchResult);
    resetStatus();
  };

  productList.addEventListener("click", (event) => {
    const card = event.target.closest(".product-card");

    if (!card) return;

    selectCard(card);
  });

  keywordInput.addEventListener("input", () => {
    handleSearch();
  });

  categorySelect.addEventListener("change", (event) => {
    setStatus(`카테고리 필터는 다음 차시에서 구현합니다. 선택값: ${event.target.value}`);
  });

  addProductBtn.addEventListener("click", () => {
    addProduct();
    handleSearch();
    setStatus("상품을 추가하고 현재 검색 조건으로 다시 렌더링했습니다.");
  });

  removeProductBtn.addEventListener("click", () => {
    removeLastProduct();
    handleSearch();
    setStatus("마지막 상품을 삭제하고 현재 검색 조건으로 다시 렌더링했습니다.");
  });

  clearSelectionBtn.addEventListener("click", () => {
    clearSelectedCards();
    setStatus("상품 선택을 해제했습니다.");
  });

  resetSearchBtn.addEventListener("click", () => {
    resetSearch();
  });
};
