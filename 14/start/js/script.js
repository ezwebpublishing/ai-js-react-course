// SECTION 03 - 14차시
// script.js: 초기 실행 파일입니다.

import { products, addProduct, removeLastProduct } from "./data.js";
import { renderProducts } from "./ui.js";
import { bindEvents } from "./events.js";

const getProducts = () => products;

// TODO 10
// render 함수를 수정하세요.
// 두 번째 매개변수 emptyText를 받을 수 있게 하고,
// renderProducts(productItems, emptyText)를 호출합니다.

const render = (productItems) => {
  renderProducts(productItems);
};

render(getProducts());

bindEvents({
  getProducts,
  render,
  addProduct,
  removeLastProduct,
});
