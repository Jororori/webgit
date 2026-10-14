
const form = document.getElementById("formContacto");
const estado = document.getElementById("formEstado");
const mensaje = document.getElementById("mensaje");
const contadorCaracteres = document.getElementById("contadorCaracteres");

mensaje.addEventListener("input", () => {
    contadorCaracteres.textContent = `${mensaje.value.length} / 300`;
});


form.addEventListener("submit", e => {
    e.preventDefault();
    const campos = {
        nombre: document.getElementById("nombre"),
        correo: document.getElementById("correo"),
        motivo: document.getElementById("motivo"),
        mensaje
    };

    let error = "";
    Object.values(campos).forEach(c => c.classList.remove("invalido"));

    if (campos.nombre.value.trim().length < 3) {
        error = "El nombre debe tener al menos 3 letras."; campos.nombre.classList.add("invalido");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campos.correo.value.trim())) {
        error = "Ingresa un correo válido."; campos.correo.classList.add("invalido");
    } else if (!campos.motivo.value) {
        error = "Selecciona un motivo."; campos.motivo.classList.add("invalido");
    } else if (mensaje.value.trim().length < 10) {
        error = "El mensaje debe tener al menos 10 caracteres."; mensaje.classList.add("invalido");
    }

    if (error) return mostrarEstado(error, "error");

    const nombre = campos.nombre.value.trim();
    mostrarEstado(`¡Gracias ${nombre}! Te responderemos pronto.`, "ok");
    if (typeof mostrarAviso === "function") mostrarAviso("Mensaje enviado ✉️");
    form.reset();
    contadorCaracteres.textContent = "0 / 300";
});
