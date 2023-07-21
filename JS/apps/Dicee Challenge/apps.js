//alert(1);
// 이미지요소(엘러먼트)들을 선택
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const h1 = document.querySelector("h1");

// 랜덤넘버 1 ~ 6
let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber1);
console.log(randomNumber2);

// 이미지객체에 src속성의 값을 입력
img1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
img2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

//누가 이겼는지 판단
// h1.innerText = "1P Winner"
if (randomNumber1 > randomNumber2) {
  h1.innerText = "😎1P Winner!!";
} else if (randomNumber1 < randomNumber2) {
  h1.innerText = "2P Winner!!😎";
} else if (randomNumber1 == randomNumber2) {
  h1.innerText = "😒DRAW😒";
}
