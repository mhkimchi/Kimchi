const header = document.querySelector("header");
const toggle = document.querySelector(".toggle");
const navbarMenu = document.querySelector(".navbar-menu");
const navbarSocial = document.querySelector(".navbar-social");
const toggleBtn = document.querySelector(".toggle .fa-solid");


window.onscroll = () => {
    if (window.scrollY >= 500) {
        header.classList.add("bg");
    } else {
        header.classList.remove("bg");
    }
    // tenary operator
    window.scrollY >= 700 ? up.style.opacity = 1 : up.style.opacity = 0;

}

toggle.onclick = () => {
    navbarMenu.classList.toggle("active");
    navbarSocial.classList.toggle("active");
    toggleBtn.classList.toggle("fa-xmark");
}


up.onclick = () => {
    window.scrollTo(0,0);
}