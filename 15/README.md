# SECTION 03 · 15차시 실습 코드

## 주제
상품 카테고리 필터 만들기

## 폴더 구성

```text
SECTION03_15_실습코드_카테고리필터_구조분리/
├─ 01_미완성본/
│  └─ ai-js-react-course/
│     └─ vanilla-js/
│        ├─ index.html
│        ├─ css/style.css
│        ├─ js/data.js
│        ├─ js/ui.js
│        ├─ js/filter.js
│        ├─ js/events.js
│        ├─ js/script.js
│        ├─ PROMPTS.md
│        └─ README.md
└─ 02_완성본/
   └─ ai-js-react-course/
      └─ vanilla-js/
         ├─ index.html
         ├─ css/style.css
         ├─ js/data.js
         ├─ js/ui.js
         ├─ js/filter.js
         ├─ js/events.js
         ├─ js/script.js
         ├─ PROMPTS.md
         └─ README.md
```

## 수업 진행 방식

1. 14차시 search.js를 filter.js 역할로 확장합니다.
2. 카테고리 select 대신 카테고리 버튼 UI를 사용합니다.
3. data-category와 dataset.category를 확인합니다.
4. filterProducts()에서 검색과 카테고리 조건을 함께 적용합니다.
5. 선택한 버튼의 active 상태와 필터 결과를 함께 갱신합니다.
6. 검색어와 카테고리를 바꿔도 같은 applyFilters() 흐름이 재사용되는지 확인합니다.

주의: ES Module을 사용하므로 Live Server로 실행하세요.
