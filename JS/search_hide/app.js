// 검색박스 (입력창 + 버튼)
const search = document.querySelector(".search");
const btn = document.querySelector(".btn"); //버튼
const input = document.querySelector(".input"); // 입력창

//버튼을 클릭 시 search에 active 클래스 토글
btn.addEventListener("click", function () {
  search.classList.toggle("active"); //active클래스를 있음 제거, 없으면추가
  input.focus(); // 입력창 포커스 커서
});
