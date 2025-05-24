const btnTop = document.getElementById("top");
const menuBtn = document.getElementById("menu-btn");
const menuBtnClose = document.getElementById("btn-close");
const headerMenu = document.querySelector(".header");
let isMenuActive = false;
const headerMenuLinks = Array.from(
  document.querySelectorAll(".header__menu-link")
);
for (let i = 0; i < headerMenuLinks.length; i++) {
  headerMenuLinks[i].addEventListener("click", () => {
    if (window.innerWidth < 600) {
      headerMenu.style.transform = "translateX(-100%)";
    }
    menuBtn.style.opacity = 1;
    isMenuActive = false;
  });
}

btnTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
menuBtn.addEventListener("click", () => {
  headerMenu.style.transform = "translateX(10%)";
  menuBtn.style.opacity = 0;
  isMenuActive = true;
});
menuBtnClose.addEventListener("click", () => {
  headerMenu.style.transform = "translateX(-100%)";
  menuBtn.style.opacity = 1;
  isMenuActive = false;
});
document.onscroll = () => {
  if (window.pageYOffset > 600) {
    btnTop.style.opacity = 1;
    btnTop.style.right = 100 + "px";
  } else {
    btnTop.style.opacity = 0;
    btnTop.style.right = -100 + "px";
  }
};

window.onresize = () => {
  if (window.innerWidth > 600 && isMenuActive) {
    headerMenu.style.transform = "translateX(0)";
    headerMenu.style.backgroundColor = "#2d3748";
  }
  if (window.innerWidth > 600 && isMenuActive === false) {
    headerMenu.style.transform = "translateX(0%)";
    headerMenu.style.backgroundColor = "#2d3748";
  }
  if (window.innerWidth < 600 && isMenuActive) {
    headerMenu.style.transform = "translateX(10%)";
    headerMenu.style.backgroundColor = "transparent";
  }
  if (window.innerWidth < 600 && isMenuActive === false) {
    headerMenu.style.transform = "translateX(-100%)";
    headerMenu.style.backgroundColor = "transparent";
  }
};
