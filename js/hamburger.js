// HAMBURGER TOGGLE
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const nav = document.querySelector('nav');
const canopy = document.querySelector('.imgCanopy');
const body = document.querySelector('*');
const secondLine = document.querySelector('.hamburgerSecondLine');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle("fade");
    })
    nav.classList.toggle('open');
    canopy.classList.toggle('open');
    //canopy.classList.toggle('fade');
    body.classList.toggle('open');
    //rotation
    secondLine.classList.toggle('hamburgerRotate');
});



