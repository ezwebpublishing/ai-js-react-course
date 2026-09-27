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

const render = (productItems, emptyText) => {
  renderProducts(productItems, emptyText);

  renderSummary({
    total: getProducts().length,
    favorite: getFavoriteCount(),
  });
};

render(getProducts());

bindEvents({
  getProducts,
  render,
  addProduct,
  removeLastProduct,
  toggleFavorite,
});
