// SECTION 03 - 11차시
// data.js: 상품 데이터와 데이터 변경 함수를 관리합니다.

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

export const addProduct = () => {
  const newProduct = {
    name: "기계식 키보드",
    description: "타건감이 좋은 데스크용 키보드",
    price: 79000,
    category: "컴퓨터 주변기기",
    discountRate: 15,
    hasStock: true,
  };

  products = [...products, newProduct];
};

export const removeLastProduct = () => {
  products = products.slice(0, -1);
};
