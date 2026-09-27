// HTML 요소 선택
const likeBtn = document.querySelector("#likeBtn");
const likeCount = document.querySelector("#likeCount");
const message = document.querySelector("#message");

// 찜 횟수 데이터
let count = 0;

// 클릭 이벤트
likeBtn.addEventListener("click", () => {
  // 1. 찜 횟수 데이터 변경
  count += 1;

  // 2. 화면의 숫자 변경
  likeCount.textContent = count;

  // 3. 화면의 문구 변경
  message.textContent = `이 상품을 ${count}번 찜했습니다.`;

  // 4. 버튼에 active 클래스 추가
  likeBtn.classList.add("active");
});
