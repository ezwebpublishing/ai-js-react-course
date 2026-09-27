// SECTION 04 - 16차시
// events.js: 상태 변경 후 화면을 다시 렌더링합니다.

import { filterProducts } from "./filter.js";
import {
  clearSelectedCards,
  resetCategoryButtons,
  resetStatus,
  selectCard,
  setStatus,
  updateActiveCategoryButton,
} from "./ui.js";

export const bindEvents = ({
  getProducts,
  render,
  addProduct,
  removeLastProduct,
  toggleFavorite,
}) => {
  const productList = document.querySelector("#productList");
  const keywordInput = document.querySelector("#keywordInput");
  const categoryFilter = document.querySelector("#categoryFilter");
  const addProductBtn = document.querySelector("#addProductBtn");
  const removeProductBtn = document.querySelector("#removeProductBtn");
  const clearSelectionBtn = document.querySelector("#clearSelectionBtn");
  const resetFilterBtn = document.querySelector("#resetFilterBtn");

  let selectedCategory = "전체";
  let currentResult = getProducts();

  const applyFilters = () => {
    currentResult = filterProducts(getProducts(), {
      keyword: keywordInput.value,
      category: selectedCategory,
    });

    render(currentResult, "조건에 맞는 상품이 없습니다.");

    const keyword = keywordInput.value.trim();
    const keywordText = keyword ? `검색어 "${keyword}"` : "검색어 없음";

    setStatus(
      `${keywordText} · 카테고리 ${selectedCategory} · 결과 ${currentResult.length}개`
    );
  };

  const resetFilters = () => {
    keywordInput.value = "";
    selectedCategory = "전체";

    resetCategoryButtons();

    currentResult = getProducts();
    render(currentResult);
    resetStatus();
  };

  productList.addEventListener("click", (event) => {
    // TODO 05
    // 찜하기 버튼 클릭을 먼저 처리하세요.
    // 해야 할 일:
    // 1. event.target.closest("[data-action='favorite']")로 버튼 찾기
    // 2. 버튼이 있으면 data-id를 Number로 변환
    // 3. toggleFavorite(id) 호출
    // 4. applyFilters()로 현재 조건 유지한 채 다시 렌더링
    // 5. setStatus()로 상태 메시지 출력
    // 6. return으로 카드 선택 이벤트와 구분

    const card = event.target.closest(".product-card");

    if (!card) return;

    selectCard(card);
  });

  keywordInput.addEventListener("input", () => {
    applyFilters();
  });

  categoryFilter.addEventListener("click", (event) => {
    const button = event.target.closest(".category-button");

    if (!button) return;

    selectedCategory = button.dataset.category;

    updateActiveCategoryButton(button);
    applyFilters();
  });

  addProductBtn.addEventListener("click", () => {
    addProduct();
    applyFilters();
  });

  removeProductBtn.addEventListener("click", () => {
    removeLastProduct();
    applyFilters();
  });

  clearSelectionBtn.addEventListener("click", () => {
    clearSelectedCards();
    setStatus("상품 선택을 해제했습니다.");
  });

  resetFilterBtn.addEventListener("click", () => {
    resetFilters();
  });
};
