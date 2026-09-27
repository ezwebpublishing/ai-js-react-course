# SECTION 03 · 13차시 실습 (완성본)

## 주제
데이터로 HTML 만들기 + 구조 분리 유지

## 폴더 구조

```text
vanilla-js/
├─ index.html
├─ css/
│  └─ style.css
└─ js/
   ├─ data.js
   ├─ ui.js
   ├─ events.js
   └─ script.js
```

## 학습 목표

- 상품 하나를 객체로 표현하기
- 여러 상품을 배열로 관리하기
- `createProductCardHTML()`로 상품 객체를 HTML 문자열로 변환하기
- `renderProducts()`로 상품 배열 전체를 화면에 출력하기
- `map()`과 `join("")`의 역할 이해하기
- 상품이 없을 때 빈 상태 메시지 처리하기

## 실행 방법

`type="module"`과 `import/export`를 사용하므로 VS Code Live Server로 실행하세요.

미완성본과 비교하면서 데이터 → HTML → 화면 출력 흐름을 확인하세요.
