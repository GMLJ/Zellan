// HAMBURGER TOGGLE
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const nav = document.querySelector("nav");
const canopy = document.querySelector(".imgCanopy");
const body = document.querySelector("*");
const secondLine = document.querySelector(".hamburgerSecondLine");
const ionIcons = document.querySelectorAll(".ion-icons");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  ionIcons.forEach((icon) => {
    icon.classList.toggle("undisplay");
  });
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
  nav.classList.toggle("open");
  nav.classList.toggle("display");
  canopy.classList.toggle("open");
  body.classList.toggle("open");
  secondLine.classList.toggle("hamburgerRotate");
});
