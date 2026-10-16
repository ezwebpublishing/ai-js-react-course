# SECTION 03 · 14차시 실습 코드

## 주제
상품 검색 기능 만들기 + search.js 분리

## 폴더 구성

```text
14/
├─ start/
│  ├─ css/
│  │  └─ style.css
│  ├─ js/
│  │  ├─ data.js
│  │  ├─ events.js
│  │  ├─ script.js
│  │  ├─ search.js
│  │  └─ ui.js
│  ├─ PROMPTS.md
│  ├─ README.md
│  └─ index.html
└─ complete/
   ├─ css/
   │  └─ style.css
   ├─ js/
   │  ├─ data.js
   │  ├─ events.js
   │  ├─ script.js
   │  ├─ search.js
   │  └─ ui.js
   ├─ PROMPTS.md
   ├─ README.md
   └─ index.html
```

## 수업 진행 방식

1. search.js를 새로 추가하는 이유를 설명합니다.
2. normalizeText()와 searchProducts()를 작성합니다.
3. events.js에서 input 이벤트와 검색 결과 렌더링 흐름을 연결합니다.
4. 상품 추가/삭제 후에도 현재 검색 조건이 유지되는지 확인합니다.
5. 검색 초기화 버튼으로 전체 상품 목록을 다시 출력합니다.

주의: ES Module을 사용하므로 Live Server로 실행하세요.
