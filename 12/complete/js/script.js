// SECTION 03 - 12차시
// script.js: 초기 실행 파일입니다.

import { products, addProduct, removeLastProduct } from "./data.js";
import { renderProducts } from "./ui.js";
import { bindEvents } from "./events.js";

const getProducts = () => products;

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
