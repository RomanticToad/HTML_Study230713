const textEl = document.querySelector("#text");
const speedEl = document.querySelector("#speed");

const text = "안녕하세요😎 김경태의 포트폴리오 사이트 입니다. ❤️환영합니다~";

let idx = 1; // 문자열 인덱스번호 1 초기값
let speed = 300 / speedEl.value; // 문자열 출력속도 / 300 = 0.3초
//스피드 밸류를 2로 올리면 0.15초

writeText(); //초기 실행하면 계속 실행됨

function writeText() {
  textEl.textContent = text.slice(0, idx); // 첫번째 문자부터 idx까지 잘라내기
  idx++;
  if (idx > text.length) {
    idx = 1;
  }
  setTimeout(writeText, speed); //speed초 후에 writetext 함수 실행함 (계속반복됨) 다음글자가 나올때 까지의 시간 ..
}

//문자열 속도를 인풋창을 읽어서 다시 설정한다.
speedEl.addEventListener("change", function (e) {
  speed = 300 / speedEl.value;
});
