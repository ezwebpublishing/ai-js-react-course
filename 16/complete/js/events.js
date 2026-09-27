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
    const favoriteButton = event.target.closest("[data-action='favorite']");

    if (favoriteButton) {
      const id = Number(favoriteButton.dataset.id);

      toggleFavorite(id);
      applyFilters();

      setStatus("찜하기 상태를 변경하고 화면을 다시 렌더링했습니다.");
      return;
    }

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
