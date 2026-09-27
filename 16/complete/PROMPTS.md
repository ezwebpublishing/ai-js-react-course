# SECTION 04 · 16차시 AI 프롬프트

## 1. React가 필요한 이유 설명

```text
바닐라 JavaScript로 상품 탐색 앱을 만들었어.
검색, 카테고리 필터, 상품 추가/삭제, 찜하기 상태까지 직접 관리하고 있어.

상태가 바뀔 때마다 renderProducts()를 다시 호출해야 하는데,
이 흐름이 왜 React의 state와 render 개념으로 이어지는지
초보자도 이해할 수 있게 설명해줘.
```

## 2. 찜하기 기능 힌트 요청

```text
상품 데이터에 isFavorite 값을 추가하고,
찜 버튼을 클릭하면 해당 상품의 isFavorite 값을 반전한 뒤
현재 검색어와 카테고리 조건을 유지한 상태로 다시 렌더링하고 싶어.

완성 코드를 바로 주지 말고,
1. toggleFavorite(id)를 data.js에 두는 이유
2. 찜 버튼 HTML에 data-action과 data-id를 넣는 이유
3. events.js에서 버튼 클릭과 카드 클릭을 구분하는 방법
4. 상태 변경 후 applyFilters()를 다시 호출하는 이유
5. 이 흐름이 React state와 어떻게 연결되는지
단계별 힌트로 설명해줘.
```

## 3. 에러 질문

```text
찜 버튼을 클릭했는데 상태가 바뀌지 않거나 화면이 갱신되지 않아.
data-id 값, toggleFavorite 실행 여부, products 배열 변화,
applyFilters 호출 여부, renderSummary 호출 여부를
어떤 순서로 확인하면 좋을지 알려줘.
```
