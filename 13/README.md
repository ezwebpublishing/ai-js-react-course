# SECTION 03 · 13차시 실습 코드

## 주제
데이터로 HTML 만들기 + 구조 분리 유지

## 폴더 구성

```text
13/
├─ start/
│  ├─ css/
│  │  └─ style.css
│  ├─ js/
│  │  ├─ data.js
│  │  ├─ events.js
│  │  ├─ script.js
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
   │  └─ ui.js
   ├─ PROMPTS.md
   ├─ README.md
   └─ index.html
```

## 수업 진행 방식

1. data.js에서 상품 데이터 배열을 확장합니다.
2. ui.js에서 createProductCardHTML()을 완성합니다.
3. renderProducts()에서 map(), join(""), innerHTML 흐름을 확인합니다.
4. 상품 추가/삭제 후 renderProducts()가 다시 실행되는지 확인합니다.
5. 완성본과 비교합니다.

주의: ES Module을 사용하므로 Live Server로 실행하세요.
