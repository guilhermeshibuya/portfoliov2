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
