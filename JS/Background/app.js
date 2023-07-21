// alert(1);  테스트임
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.querySelector("body");
// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

function handleClick() {
  console.log("클릭했네!");
}

function handlechange() {
  console.log("색을바꿧다");
  // 바디에 리니어 그라디언트 배경색을 할려면 색깔 2개 필요
  let c1 = color1.value; // 유저가 선택한 색
  let c2 = color2.value; //
  body.style.background = `linear-gradient(to right, ${c1} , ${c2})`;
}
