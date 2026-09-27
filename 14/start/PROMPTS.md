# SECTION 03 · 14차시 AI 프롬프트

## 1. 검색 기능 흐름 설명 요청

```text
상품 검색 기능을 JavaScript로 만들 때
input 이벤트, searchProducts(), filter(), includes(), renderProducts()가
각각 어떤 역할을 하는지 초보자도 이해할 수 있게 설명해줘.
```

## 2. 구조 분리 상태에서 검색 구현 힌트 요청

```text
상품 목록 코드를 data.js, ui.js, events.js, script.js로 분리한 상태야.
14차시에서는 검색 로직이 커질 것 같아서 search.js를 새로 추가하려고 해.

검색어 input에 글자를 입력하면
상품명 또는 설명에 검색어가 포함된 상품만 화면에 보여주고 싶어.

완성 코드를 바로 주지 말고,
1. search.js에 어떤 함수를 만들면 좋은지
2. filter()와 includes()를 어떻게 조합할지
3. events.js에서 검색 결과를 renderProducts()로 연결하는 방법
4. 검색 초기화 버튼의 흐름
을 단계별 힌트로 설명해줘.
```

## 3. 에러 질문

```text
검색어를 입력해도 화면이 바뀌지 않아.
keyword 값, searchProducts 결과 배열, render 호출 여부를
어떤 순서로 console.log로 확인하면 좋을지 알려줘.
```
