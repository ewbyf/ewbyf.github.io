const button = document.querySelector(".nav-button");
const sidebar = document.querySelector(".rightNavbar");
const sidebarAnimation = document.querySelector(".rightNavbar ul");

button.addEventListener("click", () => {
    button.classList.toggle('toggle');
    sidebar.classList.toggle('nav-active');
    sidebarAnimation.classList.toggle('nav-active');
});