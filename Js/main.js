const navMenu = document.getElementById("nav-menu");
navToggle = document.getElementById("nav-toggle");
navClose = document.getElementById("nav-close");
/*show menu*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
//
/*menu hidden*/
//
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
  /*20,08*/
}
//
/*Remove menu mobile*/
//
const navLink = document.querySelectorAll("nav-link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  //when we clink on each nav-link we remove the show menu
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
