selectedProduct 객체와 products 배열에서 하나의 소스에서 진행하도록 수정

숫자가 아닌 값 입력시

- 빈배열 출력되도록 테스트에 추가
- 화면에는 숫자를 입력해주세요. 문구 출력

App.jsx, ProductUtils.js 에서 maxPrice 검증하는 부분을 하나의 함수로 처리하도록
예) isInvalidMaxPrice(maxPrice)

formatPrice() 유틸 1개로 통일, 로케일 'ko-KR' 명시.

위 내용 변경후 정리 및 설명해줘
