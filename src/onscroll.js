const navbar = document.querySelector(".navbar");
const aboutMeTitle = document.querySelector("#about-me .title")
const aboutMe = document.querySelector(".about-me p")
const aboutMeSpan = document.querySelector(".about-me-default span")
const aboutMeImg = document.querySelector(".about-me img")
const projectsTitle = document.querySelector("#projects .title")
const projects = document.querySelector(".projects")


window.onscroll = () => {
    if (window.scrollY > 0) {
        document.title = "Home | Eric Wong";
    }
    if (window.scrollY > 20) {
        navbar.classList.add('navbar-solid');
    } else {
        navbar.classList.remove('navbar-solid');
    }

    if (window.scrollY > 80) {
        aboutMeTitle.classList.add('title-animation');
    }

    if (window.scrollY > 500) {
        document.title = "About Me | Eric Wong";
    }

    if (window.scrollY > 600) {
        aboutMe.setAttribute('id', 'about-me-animation');
        aboutMeSpan.setAttribute('id', 'about-me-animation-span');
        aboutMeImg.setAttribute('id', 'image-animation');
    }

    if (window.scrollY > 800) {
        projectsTitle.classList.add('title-animation');
    }

    if (window.scrollY > 1200) {
        document.title = "Projects | Eric Wong";
    }

    if (window.scrollY > 1300) {
        projects.setAttribute('id', 'project-animation');
    }


    if (window.scrollY > 1800) {
        document.title = "Contact | Eric Wong";
    }

};