//모든 이미지 박스
const allimages = document.querySelectorAll(".images .img");
const lightbox = document.querySelector(".lightbox");
const closeimgbtn = lightbox.querySelector(".close-icon");

// 모든 이미지에 클릭시 그 이미지의 주소를 라이트 박스에 전달
// allimages.forEach(function (img) {
//   img.addEventListener("click", function () {
//     console.log(img.querySelector("img").src);
//   });
// });
allimages.forEach(function (img) {
  img.addEventListener("click", function () {
    showlightbox(img.querySelector("img").src);
  });
});

//
function showlightbox(imgpath) {
  lightbox.querySelector("img").src = imgpath;
  lightbox.classList.add("show");
  document.body.style.overflow = "hidden";
}
// 닫는버튼 클릭시 show 제거
closeimgbtn.addEventListener("click", function () {
  lightbox.classList.remove("show");
  document.body.style.overflow = "auto";
});
