// 1차시에서 만든 찜하기 기능
const likeBtn = document.querySelector("#likeBtn");
const likeCount = document.querySelector("#likeCount");
const message = document.querySelector("#message");

// 2차시에서 추가한 초기화 버튼
const resetBtn = document.querySelector("#resetBtn");

let count = 0;

likeBtn.addEventListener("click", () => {
  count += 1;

  likeCount.textContent = count;
  message.textContent = `이 상품을 ${count}번 찜했습니다.`;
  likeBtn.classList.add("active");
});

resetBtn.addEventListener("click", () => {
  count = 0;

  likeCount.textContent = count;
  message.textContent = "상품이 마음에 들면 찜해보세요.";
  likeBtn.classList.remove("active");
});
