const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkboxes);

// 처음 시작시 호출
checkboxes();

function checkboxes() {
  // console.log("스크롤 했음!");

  // 화면 높이의 4/5정도 높이를 트리거 포인트로 지정
  const triggerbottom = (window.innerHeight / 5) * 4;

  // 트리거 포인트에 박스의 상단 높이가 도달 하면 보이게 하고 멀어지면 안보이게
  boxes.forEach(function (box) {
    const boxtop = box.getBoundingClientRect().top;
    if (boxtop < triggerbottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
