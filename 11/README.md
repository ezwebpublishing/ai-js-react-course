# SECTION 03 · 11차시 실습 코드

## 주제
이벤트 처리하기 + 구조 분리

## 폴더 구성

```text
SECTION03_11_실습코드_이벤트처리_구조분리/
├─ 01_미완성본/
│  └─ ai-js-react-course/
│     └─ vanilla-js/
│        ├─ index.html
│        ├─ css/style.css
│        ├─ js/data.js
│        ├─ js/ui.js
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
         ├─ js/events.js
         ├─ js/script.js
         ├─ PROMPTS.md
         └─ README.md
```

## 수업 진행 방식

1. HTML을 section 단위로 나눈 구조를 확인합니다.
2. JavaScript 파일을 data / ui / events / script 역할로 나눕니다.
3. 상품 목록을 렌더링합니다.
4. 상품 카드 클릭, 검색어 입력, 카테고리 선택 이벤트를 연결합니다.
5. 상품 추가/삭제 후 목록이 다시 렌더링되는지 확인합니다.

주의: ES Module을 사용하므로 Live Server로 실행하세요.
