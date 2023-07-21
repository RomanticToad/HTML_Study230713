// alert(1);
// const btn1 = document.querySelector("button");
const btns = document.querySelectorAll("button");

//region 과정
// btn1.addEventListener(이벤트종류, 실행함수)
// btn1.addEventListener("click", handclick);
// btn1.addEventListener("click", function () {
//   alert("클릭됨");
// });
// function handclick() {
//   alert("클릭됨!");
// }
// btns[1].addEventListener("click", function () {
//   alert("클릭됨");
// });
// btns[2].addEventListener("click", function () {
//   alert("클릭됨");
// });
// btns[3].addEventListener("click", function () {
//   alert("클릭됨");
// });
//endregion

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function (e) {
    // alert("클릭됨");
    //e.target 으로 타겟만 볼 수 있다.
    console.log(e.target.textContent);
    const key = e.target.textContent;
    // const audio = new Audio("sounds/tom-1.mp3");
    // audio.play();
    // 내가 클릭한 드럼의 글자색을 흰색으로 변경
    e.target.style.color = "white"; // 돌아오게는못하나
    //내가 클릭한 드럼의 소리를 냄!
    drumplayer(key);
  });
}
document.addEventListener("keydown", function (e) {
  console.log(e.key);
  const key = e.key;
  drumplayer(key);
  // 키를 눌러도 흰색으로 돌아오게
  document.querySelector(`.${key}`).style.color = "white";
});

// drumplyer 라는 글에 key 값을 넣어서 반복되는 문장을 줄였다
function drumplayer(key) {
  if (key == "w") {
    const audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  } else if (key == "a") {
    const audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  } else if (key == "s") {
    const audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  } else if (key == "d") {
    const audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  } else if (key == "j") {
    const audio = new Audio("sounds/crash.mp3");
    audio.play();
  } else if (key == "k") {
    const audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  } else if (key == "l") {
    const audio = new Audio("sounds/snare.mp3");
    audio.play();
  }
}

document.addEventListener("keyup", function (e) {
  console.log(e.key);
  const key = e.key;
  drumplayer(key);
  document.querySelector(`.${key}`).style.color = "#da0463";
  // document.querySelector(`.${key}`).style.
});
