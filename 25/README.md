# SECTION 05 · 25차시 실습 코드

## 차시명
상품 탐색 프로젝트 요구사항과 구조 설계

## 이번 차시 범위
- 사용자 행동과 기능 완료 기준 정리
- 화면에 영향을 주는 State 후보 정리
- `App`, `SearchBar`, `FilterPanel`, `ProductList`, `ProductCard`, `ProductDetail` 책임 설계
- 현재 차시에서는 샘플 데이터와 `ProductList`, `ProductCard` 기본 구조 확인

요구사항과 완료 기준은 `PROJECT_REQUIREMENTS.md`에서 확인합니다.

## 이후 차시 내용 선반영 금지
이번 차시에는 다음 내용을 넣지 않았습니다.

- 검색어 State
- 검색 입력창
- `filter()` 검색 기능
- 카테고리·가격 필터
- 찜하기·상품 상세

## 구성
- `start` (미완성본)
- `complete` (완성본)

## 실행
```bash
npm install
npm run dev
```

## 완료 기준
- 상품 목록이 데이터 기반으로 출력된다.
- `App`이 전체 흐름을 관리하고 목록 렌더링은 `ProductList`가 담당한다.
- 검색·필터·찜하기·상세 기능의 State 위치와 컴포넌트 책임을 설명할 수 있다.
