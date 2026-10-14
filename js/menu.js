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



// titulo de hero

const palabras = ["Trujillo", "la ciudad", "tu mañana", "tu tarde"];
let indice = 0;
const textoRotativo = document.getElementById("textoRotativo");
setInterval(() => {
    indice = (indice + 1) % palabras.length;
    textoRotativo.textContent = palabras[indice];
}, 2500);


// estado de atencion en tiempo real

function actualizarEstado() {
    const ahora = new Date();
    const dia = ahora.getDay();      // 0 = domingo
    const hora = ahora.getHours();
    const abierto = dia === 0 ? (hora >= 9 && hora < 14) : (hora >= 8 && hora < 21);
    document.getElementById("estadoLocal").innerHTML =
        `<span class="punto" style="background:${abierto ? "#4caf50" : "#e53935"}"></span>` +
        (abierto ? "Abierto ahora" : "Cerrado ahora");
}
actualizarEstado();


// animacion de inicio y contador de estadisticas

const observador = new IntersectionObserver(entradas => {
    entradas.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add("visible");
        e.target.querySelectorAll(".contar").forEach(animarContador);
        observador.unobserve(e.target);
    });
}, { threshold: 0.2 });
document.querySelectorAll(".revelar").forEach(el => observador.observe(el));

function animarContador(el) {
    const meta = +el.dataset.meta;
    let actual = 0;
    const paso = Math.ceil(meta / 60);
    const timer = setInterval(() => {
        actual = Math.min(actual + paso, meta);
        el.textContent = "+" + actual.toLocaleString("es-PE");
        if (actual === meta) clearInterval(timer);
    }, 25);
}