# SECTION 03 · 15차시 실습 (완성본)

## 주제
상품 카테고리 필터 만들기

## 구조 변화

14차시의 `search.js` 역할을 확장해 15차시에서는 `filter.js`로 사용합니다.
검색과 카테고리를 하나의 필터 기능으로 관리하기 때문에 파일 수는 늘리지 않습니다.

```text
vanilla-js/
├─ index.html
├─ css/
│  └─ style.css
└─ js/
   ├─ data.js
   ├─ ui.js
   ├─ filter.js
   ├─ events.js
   └─ script.js
```

## 학습 목표

- `data-category`와 `dataset.category` 사용하기
- 카테고리 버튼 클릭 이벤트 처리하기
- 선택된 버튼에 `active` 클래스 적용하기
- 검색어와 카테고리를 하나의 `filterProducts()`에서 처리하기
- `filter()` 안에서 복합 조건 만들기
- 필터 결과 배열을 `renderProducts()`로 출력하기

## 실행 방법

ES Module을 사용하므로 VS Code Live Server로 실행하세요.

미완성본과 비교하면서 검색 + 카테고리 → 필터 결과 → 렌더링 흐름을 확인하세요.
