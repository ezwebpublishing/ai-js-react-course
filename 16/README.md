# SECTION 04 · 16차시 실습 코드

## 주제
왜 React가 필요할까?

## 폴더 구성

```text
SECTION04_16_실습코드_왜React가필요할까_구조분리/
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

1. 15차시의 검색 + 카테고리 필터 구조를 확인합니다.
2. 상품 데이터에 `isFavorite` 상태를 추가합니다.
3. `toggleFavorite(id)`로 상태를 변경합니다.
4. 카드 안에 찜 버튼을 추가합니다.
5. 버튼 클릭과 카드 클릭 이벤트를 구분합니다.
6. 상태 변경 후 현재 필터 조건을 유지한 채 다시 렌더링합니다.
7. React가 필요한 이유를 정리합니다.

주의: ES Module을 사용하므로 Live Server로 실행하세요.
