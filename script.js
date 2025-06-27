document.addEventListener("DOMContentLoaded", function () {
    // Hero Animation
    const heroLeft = document.querySelector(".hero-left");
    heroLeft.style.opacity = "0";
    heroLeft.style.transform = "translateY(20px)";
    setTimeout(() => {
      heroLeft.style.transition = "opacity 1.5s ease, transform 1.5s ease";
      heroLeft.style.opacity = "1";
      heroLeft.style.transform = "translateY(0)";
    }, 300);
  
    // Parallax Mouse Movement
    const heroRight = document.querySelector(".hero-right img");
    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX / window.innerWidth - 0.5;
      const mouseY = e.clientY / window.innerHeight - 0.5;
      heroRight.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
    });
  
    // About Section Scroll Animation
    const aboutText = document.querySelector(".about-text");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutText.classList.add("visible");
          } else {
            aboutText.classList.remove("visible");
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(aboutText);
  
    // Hamburger Toggle
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
  
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  
    // Close menu on link click
    const navLinks = document.querySelectorAll("#nav-menu a");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  
    // About Fade-in (fallback for non-intersection browsers)
    function revealOnScroll() {
      const elements = document.querySelectorAll(".about-text, .about-image");
      elements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
          el.style.opacity = "1";
        }
      });
    }
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
  });
  
  // Typed.js Animation
  var typed = new Typed("#typed", {
    strings: ["Front-End Developer", "Graphic Designer", "UI/UX Enthusiast"],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true
  });
  
  // Scroll-based active nav highlight
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("#nav-menu a");
  
  window.addEventListener("scroll", () => {
    let current = "";
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });
    
