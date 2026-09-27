// SECTION 03 - 13차시
// data.js: 상품 데이터와 데이터 변경 함수를 관리합니다.

// TODO 01
// initialProducts 배열을 만드세요.
// 각 상품 객체는 id, name, description, price, category, discountRate, hasStock을 가집니다.
// 상품 예시:
// 무선 헤드폰, 스마트 워치, 블루투스 스피커, 미니 공기청정기

const initialProducts = [

];

// TODO 02
// products를 export let으로 선언하고 initialProducts를 복사해 초기값으로 설정하세요.

export let products = [

];

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

// TODO 03
// products를 initialProducts로 되돌리는 resetProducts 함수를 export로 만드세요.
// 힌트: products = [...initialProducts];

export const resetProducts = () => {

};
