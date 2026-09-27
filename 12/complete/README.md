# SECTION 03 · 12차시 실습 (완성본)

## 주제
화면의 내용과 스타일 변경하기 + 구조 분리 유지

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

- `textContent`와 `innerHTML`의 차이 이해하기
- `classList.add/remove/toggle`로 카드 상태 표현하기
- 검색어와 카테고리 값에 따라 `highlight`, `dimmed` 클래스 적용하기
- UI 변경 함수는 `ui.js`, 이벤트 연결은 `events.js`에 유지하기
- 스타일 초기화 버튼 구현하기

## 실행 방법

`type="module"`과 `import/export`를 사용하므로 VS Code Live Server로 실행하세요.

미완성본과 비교하면서 ui.js와 events.js의 역할 분리를 확인하세요.
