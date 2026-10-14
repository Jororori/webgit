
const testimonios = [
    { nombre: "María G.",   texto: "El mejor capuccino que he probado en Trujillo. ¡El ambiente es increíble!", estrellas: 5 },
    { nombre: "Luis R.",    texto: "Vengo a estudiar casi todos los días. Buen Wi-Fi y el cheesecake es top.",   estrellas: 5 },
    { nombre: "Andrea P.",  texto: "Me encanta que trabajen con productores peruanos. Se nota la calidad.",       estrellas: 4 },
    { nombre: "Carlos M.",  texto: "Atención rápida y amable. El café helado es perfecto para el verano.",       estrellas: 5 }
];



let actual = 0;
const caja = document.getElementById("testimonio");
const puntos = document.getElementById("puntos");

puntos.innerHTML = testimonios.map((_, i) => `<span data-i="${i}"></span>`).join("");


function mostrarTestimonio(i) {
    actual = (i + testimonios.length) % testimonios.length;
    const t = testimonios[actual];
    caja.style.animation = "none"; void caja.offsetWidth; caja.style.animation = "";
    caja.innerHTML = `
        <div class="estrellas">${"★".repeat(t.estrellas)}${"☆".repeat(5 - t.estrellas)}</div>
        <p>"${t.texto}"</p>
        <strong>— ${t.nombre}</strong>`;
    puntos.querySelectorAll("span").forEach((p, n) => p.classList.toggle("activo", n === actual));
}

document.getElementById("prevTest").addEventListener("click", () => { mostrarTestimonio(actual - 1); reiniciar(); });
document.getElementById("nextTest").addEventListener("click", () => { mostrarTestimonio(actual + 1); reiniciar(); });
puntos.addEventListener("click", e => {
    if (e.target.dataset.i) { mostrarTestimonio(+e.target.dataset.i); reiniciar(); }
});


let auto = setInterval(() => mostrarTestimonio(actual + 1), 5000);
function reiniciar() {
    clearInterval(auto);
    auto = setInterval(() => mostrarTestimonio(actual + 1), 5000);
}

mostrarTestimonio(0);
