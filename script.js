// ================= NAVBAR =================

const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");

    const icon = menuIcon.querySelector("i");

    if (navbar.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


// Close menu after clicking link

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuIcon.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// ================= TYPING EFFECT =================

const typingText = document.querySelector(".typing-text");

const roles = [
    "Java Full Stack Developer",
    "Web Developer",
    "Frontend Developer",
    "Software Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

        }

    }

    const speed = deleting ? 60 : 100;

    setTimeout(typeEffect, speed);
}

typeEffect();


// ================= ACTIVE NAVBAR =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ================= SCROLL TOP =================

const scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        scrollTop.classList.add("show");
    } else {
        scrollTop.classList.remove("show");
    }

});


// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(
    ".section-title, .skill-box, .project-card, .certificate-card, .timeline-item, .about-content, .about-image, .contact-info, .contact-form"
);


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal-show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});



// document.querySelector(".contact-form").addEventListener("submit", function () {
//     setTimeout(() => {
//         this.reset();
//     }, 500);
// });