let menuOpen = document.querySelector(".menu-open"); 
let menuClose = document.querySelector(".menu-close"); 
let menuLinks = document.querySelector(".menu-links");
let darkBackground = document.querySelector(".dark-background"); 

menuOpen.addEventListener("click", () => {
    menuLinks.classList.add("visible"); 
    darkBackground.classList.add("active"); 
})

menuClose.addEventListener("click", () => {
    menuLinks.classList.remove("visible"); 
    darkBackground.classList.remove("active"); 
})