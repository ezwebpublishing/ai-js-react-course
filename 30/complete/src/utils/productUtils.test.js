import { describe, expect, it } from "vitest";
import {
  formatPrice,
  getFavoriteCount,
  getFilteredProducts,
  isInvalidMaxPrice,
} from "./productUtils.js";

const products = [
  { id: 1, name: "무선 헤드폰", price: 89000, category: "음향", isFavorite: true },
  { id: 2, name: "기계식 키보드", price: 129000, category: "입력장치", isFavorite: false },
];

describe("최종 상품 계산 검증", () => {
  it("검색 조건을 적용한다", () => {
    expect(getFilteredProducts(products, "헤드폰", "전체", "")).toEqual([products[0]]);
  });

  it("찜한 상품 개수를 계산한다", () => {
    expect(getFavoriteCount(products)).toBe(1);
  });

  it("숫자가 아닌 최대 가격이면 빈 배열을 반환한다", () => {
    expect(getFilteredProducts(products, "", "전체", "invalid")).toEqual([]);
  });

  it("최대 가격이 비어 있거나 0이면 유효한 값으로 판단한다", () => {
    expect(isInvalidMaxPrice("")).toBe(false);
    expect(isInvalidMaxPrice("0")).toBe(false);
  });

  it("음수와 숫자가 아닌 최대 가격을 유효하지 않은 값으로 판단한다", () => {
    expect(isInvalidMaxPrice("-1")).toBe(true);
    expect(isInvalidMaxPrice("invalid")).toBe(true);
  });

  it("가격을 한국 로케일 형식으로 표시한다", () => {
    expect(formatPrice(89000)).toBe("89,000");
  });
});
