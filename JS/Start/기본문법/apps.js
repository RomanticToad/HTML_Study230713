// 입력값을 받는다
// let age = prompt("나이를 입력해 주세요");
// alert(`당신의 나이는 ${age}입니다!`);

// 확인 또는 취소를 구한다
// {
//  let result = confirm("당신이 주인인가요?");
//  alert(result);
// }

// {
//   let a = prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
//   let b = prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);
//   alert(a + b); // 12
// }

// {
// let a = prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
// let b = prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);
// alert(Number(a) + Number(b)); // 12가 나오는걸 3으로 고침
// }
// {
//   let a = 1,
//     b = 1;
//   let c = ++a; // ?
//   let d = b++; // ?
// }

// let eggCount = 41; // 42
// let plus1 = eggCount++; // 41

// let year = prompt("서동옥의 고추는 크다/작다", "");
// if (year == "작다") {
//   alert("정답입니다!!");
// } else {
//   alert("아닌거같은데.");
// }

let 사과 = 11;
바나나 = 10;
if (사과 > 바나나) {
  console.log("사과가 바나나보다 많습니다.");
}
if (사과 < 바나나) {
  console.log("바나나가가 사과보다 많습니다.");
}
if (사과 == 바나나) {
  console.log("사과와 바나나는 같습니다.");
}

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

// let sum = 0;
// for (let i = 1; i < 101; i++) {
//   console.log(i);
//   sum = sum + i;
// }
// console.log("합계는: " + sum);

// for (let i = 1; i < 101; i++) {
//   if (i % 15 == 0) {
//     console.log("삼삼오오");
//   } else if (i % 3 == 0) {
//     console.log("삼삼");
//   } else if (i % 5 == 0) {
//     console.log("오오");
//   } else {
//     console.log(i);
//   }
// }

//함수 function

// function showMessage() {
//   alert("안녕하세요!");
// }
//함수 호출(실행)
// showMessage();

//지역변수 전역변수

// function showMessage() {
//   // 함수내에서 선언한 변수 = 지역변수 = 함수 내에서만 접근가능
//   let message = "방가붕가";
//   alert(message);
// }

// showMessage(); // 실행

// let message = "ㅎㅇㅎㅇ";
// alert(message); // 이게 되려면 선언을 더 해야한다.

// let b = "b";
// {
//   let a = "a";
//   var c = "c";
//   console.log(a);
//   console.log(b);
// }
// console.log(b);
// console.log(a);
// console.log(b);
// console.log(c);

// function showMessage() {
//   // message 가 함수내에서 정의됨
//   let message = "dkssud!";
//   alert(message);
// }

// let user = "홍길동";
// function showMessage() {
//   let message = "방갑습니다.";
//   alert(user + "님 " + message);
// }
// showMessage();

// 함수의 인수
// function showMessage(who, text) {
//   who = "😊" + who + "😊";
//   alert(who + ": " + text);
// }

// let who = prompt("니가 누군데");
// let text = prompt("어쩌라고");
// alert(who + ":" + text);

//입력값을 받는다
// let age = prompt("나이를 입력해 주세요");
// alert(`당신의 나이는 ${age}입니다!`);

//함수의 리턴(반환값)
// function 더하기(a, b) {
//   return a + b;
// }
// function 곱하기(a, b) {
//   return a * b;
// }

// console.log(곱하기(10, 10));
// let result = 곱하기(7, 7);
