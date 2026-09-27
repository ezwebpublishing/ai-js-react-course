// SECTION 04 - 16차시
// script.js: 초기 실행 파일입니다.

import {
  products,
  addProduct,
  removeLastProduct,
  toggleFavorite,
  getFavoriteCount,
} from "./data.js";
import { renderProducts, renderSummary } from "./ui.js";
import { bindEvents } from "./events.js";

const getProducts = () => products;

// TODO 06
// render 함수를 수정하세요.
// 해야 할 일:
// 1. renderProducts(productItems, emptyText) 호출
// 2. renderSummary({ total: getProducts().length, favorite: getFavoriteCount() }) 호출

const render = (productItems, emptyText) => {

};

render(getProducts());

// TODO 07
// bindEvents에 toggleFavorite도 함께 전달하세요.

bindEvents({
  getProducts,
  render,
  addProduct,
  removeLastProduct,
});
