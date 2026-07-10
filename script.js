/* ===========================
   Smooth Scrolling
=========================== */

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });

    });

});

/* ===========================
   Navbar Shadow on Scroll
=========================== */

window.addEventListener('scroll', function(){

    const header = document.querySelector('header');

    if(window.scrollY > 50){

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    }

    else{

        header.style.boxShadow = "none";

    }

});

/* ===========================
   Scroll Reveal Animation
=========================== */

const sections = document.querySelectorAll("section");

const reveal = () => {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            section.style.opacity = "1";
            section.style.transform = "translateY(0px)";

        }

    });

};

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "1s";

});

window.addEventListener("scroll", reveal);

reveal();

/* ===========================
   Scroll To Top Button
=========================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "25px";
topBtn.style.bottom = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#38bdf8";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "24px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 0 15px rgba(56,189,248,.6)";

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }

    else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

/* ===========================
   Active Navigation Link
=========================== */

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});
/* Typing Animation */

var typed = new Typed(".typing", {

    strings: [

        "Aspiring Software Engineer",

        "C++ Programmer",

        "Problem solver",

        "Python Programmer"

    ],

    typeSpeed: 70,

    backSpeed: 40,

    backDelay: 1500,

    loop: true

});
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});