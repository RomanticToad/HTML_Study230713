//입력값을 받는다
// let age = prompt("나이를 입력해 주세요");
// alert(`당신의 나이는 ${age}입니다!`);

// 확인 또는 취소를 구한다
// let result = confirm("당신이 주인인가요?");
// alert(result);

// let a = prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
// let b = prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);

// alert(a + b); // 12

// let a = prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
// let b = prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);
// alert(Number(a) + Number(b)); // 12가 나오는걸 3으로 고침

// let a = 1,
//   b = 1;

// let c = ++a; // ?
// let d = b++; // ?

// let year = prompt("서동옥의 고추는 크다/작다", "");
// if (year == "작다") {
//   alert("정답입니다!!");
// } else {
//   alert("아닌거같은데.");
// }

// let 사과 = 11;
// 바나나 = 10;
// if (사과 > 바나나) {
//   console.log("사과가 바나나보다 많습니다.");
// }
// if (사과 < 바나나) {
//   console.log("바나나가가 사과보다 많습니다.");
// }
// if (사과 == 바나나) {
//   console.log("사과와 바나나는 같습니다.");
// }

// let 사과 = 10;
// 바나나 = 10;
// if (사과 > 바나나) {
//   console.log("사과가 바나나보다 많습니다.");
// } else {
//   console.log("바나나가 사과보다 많거나 같습니다.");
// }

// let 사과 = 19;
// 바나나 = 10;
// if (사과 > 바나나) {
//   console.log("사과가 바나나보다 많습니다.");
// } else if (바나나 > 사과) {
//   console.log("바나나가 사과보다 많습니다.");
// } else {
//   console.log("같습니다.");
// }

// for (let i = 0; i < 3; i++) {
//   // 0, 1, 2가 출력됩니다.
//   alert(i);
// }

//for 반복문
//1에서 100까지 콘솔에 출력하라
// for (let i = 1; i < 101; i++) {
//   console.log(i);
// }

let sum = 0;
for (let i = 1; i < 101; i++) {
  console.log(i);
  sum = sum + i;
}
console.log("합계는: " + sum);
