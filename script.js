

document.addEventListener("DOMContentLoaded", function () {
    const heroLeft = document.querySelector(".hero-left");
    
    // Set initial state
    heroLeft.style.opacity = "0";
    heroLeft.style.transform = "translateY(20px)";
    
    // Animation for Hero Text (fade and slide up)
    setTimeout(() => {
        heroLeft.style.transition = "opacity 1.5s ease, transform 1.5s ease";  // Ensure transition is applied
        heroLeft.style.opacity = "1";
        heroLeft.style.transform = "translateY(0)";
    }, 300);
    
    // Optional: Add mouse movement effect for image
    const heroRight = document.querySelector(".hero-right img");

    document.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        // Add parallax effect to the image
        heroRight.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
    });
});

document.addEventListener("DOMContentLoaded", function() {
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

document.addEventListener("DOMContentLoaded", function () {
    const heroLeft = document.querySelector(".hero-left");
    
    // Hero Section Animation (Page Load)
    heroLeft.style.opacity = "0";
    heroLeft.style.transform = "translateY(20px)";
    
    setTimeout(() => {
        heroLeft.style.transition = "opacity 1.5s ease, transform 1.5s ease";
        heroLeft.style.opacity = "1";
        heroLeft.style.transform = "translateY(0)";
    }, 300);
    
    // Mouse Movement Effect for Hero Section Image
    const heroRight = document.querySelector(".hero-right img");
    
    document.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        heroRight.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
    });

    // Scroll Animation for About Section
    const aboutText = document.querySelector(".about-text");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    aboutText.classList.add("visible"); // Add animation class
                } else {
                    aboutText.classList.remove("visible"); // Remove class to replay animation
                }
            });
        },
        { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    observer.observe(aboutText);
});

var typed = new Typed("#typed", {
  strings: ["Front-End Developer", "Graphic Designer", "UI/UX Enthusiast"],
  typeSpeed: 60,
  backSpeed: 30,
  loop: true
});

// Active link switch on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#nav-menu a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // 100 = scroll offset
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
