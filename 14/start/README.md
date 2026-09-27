# SECTION 03 · 14차시 실습 (미완성본)

## 주제
상품 검색 기능 만들기 + search.js 분리

## 폴더 구조

```text
vanilla-js/
├─ index.html
├─ css/
│  └─ style.css
└─ js/
   ├─ data.js
   ├─ ui.js
   ├─ search.js
   ├─ events.js
   └─ script.js
```

## 학습 목표

- 검색 로직을 `search.js`로 분리하기
- `filter()`로 조건에 맞는 상품만 추출하기
- `includes()`로 상품명과 설명에 검색어가 포함되는지 확인하기
- `input` 이벤트 발생 시 검색 결과를 다시 렌더링하기
- 검색어가 비어 있으면 전체 상품을 보여주기
- 검색 결과가 없을 때 빈 상태 메시지 출력하기

## 실행 방법

`type="module"`과 `import/export`를 사용하므로 VS Code Live Server로 실행하세요.

TODO 순서대로 직접 완성한 뒤 완성본과 비교하세요.
