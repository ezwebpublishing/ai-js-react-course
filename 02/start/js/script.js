// 1차시에서 만든 찜하기 기능
const likeBtn = document.querySelector("#likeBtn");
const likeCount = document.querySelector("#likeCount");
const message = document.querySelector("#message");

let count = 0;

likeBtn.addEventListener("click", () => {
  count += 1;

  likeCount.textContent = count;
  message.textContent = `이 상품을 ${count}번 찜했습니다.`;
  likeBtn.classList.add("active");
});

// TODO 03
// id가 resetBtn인 초기화 버튼을 선택하세요.


// TODO 04
// resetBtn을 클릭했을 때 실행되는 이벤트를 등록하세요.
//
// 초기화 버튼을 클릭하면 JavaScript가 해야 할 일
// 1. count를 0으로 변경
// 2. likeCount의 내용을 0으로 변경
// 3. message 문구를 처음 문구로 변경
// 4. likeBtn에서 active 클래스 제거
