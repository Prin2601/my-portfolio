
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.classList.contains("responsive")) {
        menuBtn.classList.remove("responsive");
    } else {
        menuBtn.classList.add("responsive");
    }
}

document.getElementById("downloadCvBtn").addEventListener("click", function() {
    // Open the Google Drive link in a new tab
    window.open("https://drive.google.com/file/d/1rCaE0YWvdNuOdjdOqOXLYhoPS8WIluA9/view?usp=sharing", "_blank");
});

document.addEventListener("DOMContentLoaded", function () {  // Ensures DOM is fully loaded

    const navLinks = document.querySelectorAll(".nav_menu_list .nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();  // Prevent default anchor behavior (page reload)

            navLinks.forEach(nav => nav.classList.remove("active-link"));

         
            this.classList.add("active-link");

            const targetSection = document.querySelector(this.getAttribute("href"));
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});
var typeEffect = new Typed(".typedText", {
    strings: ["Designer", "Coder", "Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
});

// Scroll animation
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });

sr.reveal(".project-box", { interval: 200 });
sr.reveal(".top-header", {});

sr.reveal(".about-info", { delay: 100, origin: "left" });
sr.reveal(".contact-info", { delay: 100, origin: "right" });


const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });

const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srRight.reveal(".contact-info", { delay: 100 });










