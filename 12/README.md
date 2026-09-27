# SECTION 03 · 12차시 실습 코드

## 주제
화면의 내용과 스타일 변경하기 + 구조 분리 유지

## 폴더 구성

```text
SECTION03_12_실습코드_내용스타일변경_구조분리/
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

1. 11차시에서 분리한 HTML/JS 구조를 확인합니다.
2. ui.js에 카드 스타일 변경 함수를 추가합니다.
3. events.js에서 input/change/click 이벤트마다 UI 함수를 호출합니다.
4. 검색어와 카테고리 조건에 따라 highlight/dimmed 클래스가 적용되는지 확인합니다.
5. 스타일 초기화 버튼으로 화면 상태를 되돌립니다.

주의: ES Module을 사용하므로 Live Server로 실행하세요.
