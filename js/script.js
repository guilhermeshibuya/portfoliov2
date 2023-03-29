const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

// Hide navbar mobile
const navLinks = document.querySelectorAll(".nav__link");

const navHide = () => {
    const navMenu = document.getElementById("nav-menu");

    navMenu.classList.remove("show-menu");
}

navLinks.forEach(link => link.addEventListener("click", navHide));

// Scroll header mobile
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 15) {
        header.classList.add("nav-scroll");
    } else {
        header.classList.remove("nav-scroll");
    }
});

// DARK MODE

//button
const btnDarkMode = document.getElementById("btn-dark-mode");
const btnDarkModeContainer = document.getElementById("btn-container");
const ball = document.getElementById("ball");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");

//body
const body = document.getElementById("body");

//nav
const navLogo = document.getElementById("nav-logo");

//section title
const sectionTitles = document.querySelectorAll(".section__title");

// INPUTS
const inputs = document.querySelectorAll(".input-control");
const labels = document.querySelectorAll('.form-label');

//Contact form
const contactForm = document.getElementById("contact-form");

btnDarkMode.addEventListener("click", () => {
    btnDarkModeContainer.classList.toggle("lightiest-background");
    ball.classList.toggle("dark-background");
    sun.classList.toggle("dark-font");
    moon.classList.toggle("dark-font");

    body.classList.toggle("dark-background");
    body.classList.toggle("lighter-font");

    sectionTitles.forEach(title => title.classList.toggle("lightiest-font"));

    header.classList.toggle("dark-light-background");
    navMenu.classList.toggle("dark-light-background");
    navToggle.classList.toggle("lighter-font");
    navLogo.classList.toggle("lighter-font");
    navLinks.forEach(link => link.classList.toggle("lighter-font"));

    inputs.forEach(input => input.classList.toggle("input-control-dark"));
    labels.forEach(label => label.classList.toggle("form-label-dark"));

    contactForm.classList.toggle("contact-dark");
});