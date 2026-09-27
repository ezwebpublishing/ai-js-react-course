# SECTION 03 · 11차시 실습 (미완성본)

## 주제
이벤트 처리하기 + 구조 분리

## 이번 차시에서 달라지는 점

기존에는 하나의 `script.js`에 데이터, 화면 출력, 이벤트를 모두 작성했습니다.
11차시부터는 코드가 비대해지기 시작하므로 다음처럼 역할을 분리합니다.

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

## HTML 구조

```text
main.app
├─ section.hero
├─ section.search-panel
├─ section.product-section
└─ section.control-panel
```

## 실행 방법

`type="module"`과 `import/export`를 사용하므로
파일을 직접 더블클릭하지 말고 VS Code의 Live Server로 실행하세요.

## 학습 목표

- `addEventListener()`로 이벤트 연결하기
- `click`, `input`, `change` 이벤트 구분하기
- UI를 `section` 단위로 분리하기
- JavaScript를 `data`, `ui`, `events`, `script` 역할로 분리하기
- 상품 추가/삭제 후 화면 다시 렌더링하기

TODO 순서대로 직접 완성한 뒤 완성본과 비교하세요.
