const header = document.querySelector("header");

const links = document.querySelectorAll(".mm-navbar-link");

const hamburger = document.querySelector(".mm-navbar-hamburger");

const buttons = document.querySelectorAll(".filter-button");

window.addEventListener("scroll", () => {
    activeLink();
});

/* --------------- Grab elements from DOM --------------- */

/* --------------- Sticky Navbar --------------- */
function stickyNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);

/* --------------- Change Active Link On Scroll --------------- */
function activeLink() {
    let sections = document.querySelectorAll("section[id]");
    let passedSections = Array.from(sections)
        .map((sct, i) => {
            return {
                y: sct.getBoundingClientRect().top - header.offsetHeight,
                id: i,
            };
        }).filter(sct => sct.y <= 0);
    let currSectionID = passedSections.at(-1).id;

    links.forEach(l => l.classList.remove("active"));
    links[currSectionID].classList.add("active");
}

activeLink();

/* --------------- Open & Close Navbar Menu --------------- */
hamburger.addEventListener("click", () => {
    document.body.classList.toggle("open");
    document.body.classList.toggle("stopScrolling");
});

links.forEach(link => link.addEventListener("click", () => {
    document.body.classList.remove("open");
    document.body.classList.remove("stopScrolling");
}))


/* --------------- Reveal Animation --------------- */
let sr = ScrollReveal({
    duration: 2500,
    distance: "60px",
});

sr.reveal(".mm-slogan", {origin: "top", delay: 3 });
sr.reveal(".progress-bar", {origin: "left"});
sr.reveal(".about-section", {origin: "bottom", delay: 5});
sr.reveal(".skills-section", {origin: "bottom", delay: 5});
sr.reveal(".services-section", {origin: "bottom", delay: 5});
sr.reveal(".portfolio-section", {origin: "bottom", delay: 5});
sr.reveal(".contact-section", {origin: "bottom", delay: 5});


$(document).ready(function(){
    var mixer = mixitup('#gallery', {
        selectors: {
            control: '.filter-button' // Specify the selector for filter controls
        }
    });
});