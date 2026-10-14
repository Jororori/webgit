// navegacion
const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const volverArriba = document.getElementById("volverArriba");

// menu hambur  
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("abierto");
    menuToggle.textContent = navLinks.classList.contains("abierto") ? "✕" : "☰";
});
navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("abierto");
        menuToggle.textContent = "☰";
    });
});


