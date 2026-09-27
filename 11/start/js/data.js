// SECTION 03 - 11차시
// data.js: 상품 데이터와 데이터 변경 함수를 관리합니다.

// TODO 01
// products 배열을 export로 선언하세요.
// 상품 객체는 name, description, price, category, discountRate, hasStock을 가집니다.

export let products = [
  {
    name: "무선 헤드폰",
    description: "가볍게 즐기는 데일리 무선 헤드폰",
    price: 89000,
    category: "전자제품",
    discountRate: 20,
    hasStock: true,
  },
  {
    name: "스마트 워치",
    description: "운동과 일상을 기록하는 웨어러블 기기",
    price: 129000,
    category: "전자제품",
    discountRate: 10,
    hasStock: true,
  },
  {
    name: "블루투스 스피커",
    description: "작지만 풍부한 사운드를 제공하는 스피커",
    price: 59000,
    category: "음향기기",
    discountRate: 0,
    hasStock: true,
  },
];

// TODO 02
// addProduct 함수를 export로 선언하세요.
// 새 상품 객체를 만들고 spread 문법으로 products 배열에 추가하세요.

export const addProduct = () => {

};

// TODO 03
// removeLastProduct 함수를 export로 선언하세요.
// slice(0, -1)을 사용해 마지막 상품을 제외한 새 배열을 만드세요.

export const removeLastProduct = () => {

};
