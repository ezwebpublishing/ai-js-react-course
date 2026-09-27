# SECTION 03 · 15차시 AI 프롬프트

## 1. 복합 필터 개념 설명

```text
JavaScript에서 상품 검색어와 카테고리 조건을 함께 적용하려고 해.
filter() 안에서 검색어 조건과 카테고리 조건을 각각 만든 뒤
&& 연산자로 결합하는 이유를 초보자도 이해할 수 있게 설명해줘.
```

## 2. 구조 분리 상태에서 필터 기능 힌트 요청

```text
14차시에서 search.js로 검색 기능을 만들었어.
15차시에서는 파일을 더 늘리지 않고 search.js를 filter.js로 확장해서
검색어와 카테고리 조건을 함께 처리하고 싶어.

카테고리는 data-category를 가진 버튼으로 구성하고
선택된 버튼에는 active 클래스를 적용하려고 해.

완성 코드를 바로 주지 말고,
1. filterProducts(products, { keyword, category })의 조건식
2. '전체' 카테고리를 처리하는 방법
3. 버튼 클릭 시 selectedCategory 값을 바꾸는 방법
4. active 클래스를 선택된 버튼으로 옮기는 방법
5. 검색과 카테고리 변경 시 같은 필터 함수를 재사용하는 방법
을 단계별 힌트로 설명해줘.
```

## 3. 에러 질문

```text
카테고리 버튼은 active가 바뀌는데 상품 목록이 필터링되지 않아.
selectedCategory 값, button.dataset.category,
filterProducts 결과 배열, render 호출 여부를
어떤 순서로 확인하면 좋을지 알려줘.
```
