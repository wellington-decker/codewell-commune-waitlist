const overlay = document.querySelector(".overlay");
const mobileNav = document.querySelector(".mobile-nav__container");
const closeMenu = document.querySelector(".ph-x-circle-light");
const menu = document.querySelector(".menu-icon");
const menuBtn = document.querySelector(".menu-btn");
const body = document.querySelector("body");

const openModal = () => {
    overlay.classList.add("show");
    mobileNav.classList.add("open");
    body.style.overflow = "hidden";
};

const closeModal = () => {
    overlay.classList.remove("show")
    
    mobileNav.classList.remove("open")
    
};


menuBtn.addEventListener('click', openModal);
closeMenu.addEventListener('click', closeModal);