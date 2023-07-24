const panels = document.querySelectorAll(".panel");

// for(let i= 0; i<panels.length; i++){
//   panels[i].addEventListener()
// }

//매개변수를 적었을 때 반복되는 아이템
panels.forEach(function (panel) {
  panel.addEventListener("click", function () {
    console.log(panel);
    // 모든 패널에서 active 클래스를 제거해야 원하는 결과물이 나온다.
    removeActiveClass();
    panel.classList.add("active");
  });
});

function removeActiveClass() {
  // 패널에 있는 모든 액티브클래스를 제거한다.
  // panels[0].classList.remove("active");
  // panels[1].classList.remove("active");
  // panels[2].classList.remove("active");
  // panels[3].classList.remove("active");
  // panels[4].classList.remove("active");
  // 위에 문장을 줄이자면.
  panels.forEach(function (p) {
    p.classList.remove("active");
  });
}
