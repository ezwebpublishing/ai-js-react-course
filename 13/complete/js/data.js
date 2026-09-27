// SECTION 03 - 13차시
// data.js: 상품 데이터와 데이터 변경 함수를 관리합니다.

const initialProducts = [
  {
    id: 1,
    name: "무선 헤드폰",
    description: "가볍게 즐기는 데일리 무선 헤드폰",
    price: 89000,
    category: "전자제품",
    discountRate: 20,
    hasStock: true,
  },
  {
    id: 2,
    name: "스마트 워치",
    description: "운동과 일상을 기록하는 웨어러블 기기",
    price: 129000,
    category: "전자제품",
    discountRate: 10,
    hasStock: true,
  },
  {
    id: 3,
    name: "블루투스 스피커",
    description: "작지만 풍부한 사운드를 제공하는 스피커",
    price: 59000,
    category: "음향기기",
    discountRate: 0,
    hasStock: true,
  },
  {
    id: 4,
    name: "미니 공기청정기",
    description: "책상 위에 두기 좋은 소형 공기청정기",
    price: 69000,
    category: "생활가전",
    discountRate: 5,
    hasStock: false,
  },
];

export let products = [...initialProducts];

export const addProduct = () => {
  const newProduct = {
    id: Date.now(),
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

export const resetProducts = () => {
  products = [...initialProducts];
};
