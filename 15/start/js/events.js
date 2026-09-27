// SECTION 03 - 15차시
// events.js: 사용자 이벤트와 필터 흐름을 연결합니다.

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
}) => {
  const productList = document.querySelector("#productList");
  const keywordInput = document.querySelector("#keywordInput");
  const categoryFilter = document.querySelector("#categoryFilter");
  const addProductBtn = document.querySelector("#addProductBtn");
  const removeProductBtn = document.querySelector("#removeProductBtn");
  const clearSelectionBtn = document.querySelector("#clearSelectionBtn");
  const resetFilterBtn = document.querySelector("#resetFilterBtn");

  // TODO 03
  // 현재 선택된 카테고리 상태를 저장하세요.
  // 초기값: "전체"

  let selectedCategory = "";

  // TODO 04
  // 현재 필터 결과를 저장할 currentResult를 만드세요.
  // 초기값: getProducts()

  let currentResult = [];

  // TODO 05
  // applyFilters 함수를 완성하세요.
  //
  // 해야 할 일:
  // 1. filterProducts(getProducts(), { keyword, category }) 호출
  // 2. keyword는 keywordInput.value
  // 3. category는 selectedCategory
  // 4. 결과를 currentResult에 저장
  // 5. render(currentResult, "조건에 맞는 상품이 없습니다.") 호출
  // 6. 상태 메시지에 검색어, 카테고리, 결과 개수 출력

  const applyFilters = () => {

  };

  // TODO 06
  // resetFilters 함수를 완성하세요.
  //
  // 해야 할 일:
  // 1. keywordInput.value = ""
  // 2. selectedCategory = "전체"
  // 3. resetCategoryButtons()
  // 4. currentResult = getProducts()
  // 5. render(currentResult)
  // 6. resetStatus()

  const resetFilters = () => {

  };

  productList.addEventListener("click", (event) => {
    const card = event.target.closest(".product-card");

    if (!card) return;

    selectCard(card);
  });

  // TODO 07
  // keywordInput의 input 이벤트에서 applyFilters()를 호출하세요.


  // TODO 08
  // categoryFilter에 click 이벤트를 연결하세요.
  //
  // 해야 할 일:
  // 1. event.target.closest(".category-button")으로 버튼 찾기
  // 2. 버튼이 아니면 return
  // 3. selectedCategory = button.dataset.category
  // 4. updateActiveCategoryButton(button)
  // 5. applyFilters()


  addProductBtn.addEventListener("click", () => {
    addProduct();

    // TODO 09
    // 상품 추가 후 현재 필터 조건을 다시 적용하세요.
  });

  removeProductBtn.addEventListener("click", () => {
    removeLastProduct();

    // TODO 10
    // 상품 삭제 후 현재 필터 조건을 다시 적용하세요.
  });

  clearSelectionBtn.addEventListener("click", () => {
    clearSelectedCards();
    setStatus("상품 선택을 해제했습니다.");
  });

  // TODO 11
  // resetFilterBtn 클릭 이벤트를 연결하고 resetFilters()를 호출하세요.

};
