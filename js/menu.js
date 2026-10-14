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


// header y boton para volver 


const secciones = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
    const y = window.scrollY;
    header.classList.toggle("scroll", y > 60);
    volverArriba.classList.toggle("visible", y > 500);

    secciones.forEach(sec => {
        const enVista = y >= sec.offsetTop - 120 && y < sec.offsetTop + sec.offsetHeight - 120;
        const link = navLinks.querySelector(`a[href="#${sec.id}"]`);
        if (link) link.classList.toggle("activo", enVista);
    });
});
volverArriba.addEventListener("click", () => window.scrollTo({ top: 0 }));
