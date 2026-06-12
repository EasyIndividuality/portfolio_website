const downloadCVBtn = document.querySelector(".downloadCVBtn");
const letsTalkBtn = document.querySelector(".letsTalkBtn");
const btnState = document.querySelectorAll(".btnState");
btnState.forEach((button) => {
  button.addEventListener("mouseover", (e) => {
    if (e.target.contains(downloadCVBtn)) {
      toggleActiveBtn(letsTalkBtn, downloadCVBtn);
    } else {
      toggleActiveBtn(downloadCVBtn, letsTalkBtn);
    }
  });
  button.addEventListener("mouseout", (e) => {
    if (e.target.contains(letsTalkBtn)) {
      toggleActiveBtn(letsTalkBtn, downloadCVBtn);
    }
  });
});
function toggleActiveBtn(notActive, isActive) {
  notActive.classList.remove("activeBtn");
  isActive.classList.add("activeBtn");
}

const activeNav = document.querySelector(".activeNav");
const overlay = document.querySelector(".overlay");
document.querySelector(".hamMenu").addEventListener("click", showNavBar);
overlay.addEventListener("click", showNavBar);
function showNavBar() {
  document.querySelector(".navUl").classList.toggle("activeNav");
  overlay.classList.toggle("activeOverlay");
}
