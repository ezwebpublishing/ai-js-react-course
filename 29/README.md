# SECTION 05 · 29차시 실습 코드

## 차시명
기능 통합 검증과 테스트 기초

## 이번 차시 범위
- 검색·필터·찜하기·상세·초기화 사용자 시나리오 점검
- 계산 로직을 `productUtils.js`의 순수 함수로 분리
- Vitest 테스트 작성
- 실패하는 테스트를 확인한 뒤 구현을 수정하는 Red-Green 흐름 체험
- `npm run test`와 `npm run build`로 결과 검증

## 구성
- `start` (미완성본)
- `complete` (완성본)

## 실행
```bash
npm install
npm run dev
npm run test
npm run build
```

## 이후 차시 내용 선반영 금지
이번 차시에는 다음 내용을 넣지 않았습니다.

- AI 코드 리뷰 프롬프트 적용
- 프로젝트 단위 리팩터링 판단

29차시는 새 기능 추가보다 **사용자 시나리오와 자동 테스트로 완료 기준을 검증**하는 단계입니다.

## 실습 흐름
1. `start/src/utils/productUtils.test.js`의 `it.todo`를 실제 테스트로 바꿉니다.
2. 테스트가 실패하는지 확인합니다.
3. `productUtils.js`를 구현합니다.
4. 테스트와 빌드가 모두 통과하는지 확인합니다.
