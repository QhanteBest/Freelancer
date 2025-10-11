const navToggle = document.getElementById("navToggle");
const navClose = document.getElementById("navClose");
const navLinks = document.getElementById("navLinks");
const logo = document.getElementById("logo");

navToggle.addEventListener("click", () => {
    navLinks.classList.add("show");
    logo.classList.add("hide-logo");

    navToggle.style.display = "none";
    navClose.style.display = "block";
    });

    navClose.addEventListener("click", () => {
        navLinks.classList.remove("show");
        logo.classList.remove("hide-logo");

        navClose.style.display = "none";
        navToggle.style.display = "block";
    });