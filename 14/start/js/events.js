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

  // TODO 03
  // 현재 화면에 보여줄 검색 결과 배열을 저장할 변수를 만드세요.
  // 초기값은 getProducts()입니다.

  let currentSearchResult = [];

  // TODO 04
  // 검색 실행 함수 handleSearch를 완성하세요.
  //
  // 해야 할 일:
  // 1. keywordInput.value로 검색어 가져오기
  // 2. searchProducts(getProducts(), keyword) 결과를 currentSearchResult에 저장
  // 3. render(currentSearchResult, "검색 결과가 없습니다.") 호출
  // 4. 검색어가 있으면 `"검색어" 검색 결과 n개` 상태 메시지 출력
  // 5. 검색어가 없으면 "전체 상품을 표시합니다." 출력

  const handleSearch = () => {

  };

  // TODO 05
  // 검색 초기화 함수 resetSearch를 완성하세요.
  //
  // 해야 할 일:
  // 1. keywordInput.value = "";
  // 2. categorySelect.value = "전체";
  // 3. currentSearchResult = getProducts();
  // 4. render(currentSearchResult);
  // 5. resetStatus();

  const resetSearch = () => {

  };

  productList.addEventListener("click", (event) => {
    const card = event.target.closest(".product-card");

    if (!card) return;

    selectCard(card);
  });

  // TODO 06
  // keywordInput에 input 이벤트를 연결하고 handleSearch를 호출하세요.


  categorySelect.addEventListener("change", (event) => {
    setStatus(`카테고리 필터는 다음 차시에서 구현합니다. 선택값: ${event.target.value}`);
  });

  addProductBtn.addEventListener("click", () => {
    addProduct();

    // TODO 07
    // 상품 추가 후 현재 검색어 기준으로 다시 렌더링하세요.
    // 힌트: handleSearch()

    setStatus("상품을 추가하고 현재 검색 조건으로 다시 렌더링했습니다.");
  });

  removeProductBtn.addEventListener("click", () => {
    removeLastProduct();

    // TODO 08
    // 상품 삭제 후 현재 검색어 기준으로 다시 렌더링하세요.
    // 힌트: handleSearch()

    setStatus("마지막 상품을 삭제하고 현재 검색 조건으로 다시 렌더링했습니다.");
  });

  clearSelectionBtn.addEventListener("click", () => {
    clearSelectedCards();
    setStatus("상품 선택을 해제했습니다.");
  });

  // TODO 09
  // resetSearchBtn에 click 이벤트를 연결하고 resetSearch를 호출하세요.

};
