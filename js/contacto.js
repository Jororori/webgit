
const form = document.getElementById("formContacto");
const estado = document.getElementById("formEstado");
const mensaje = document.getElementById("mensaje");
const contadorCaracteres = document.getElementById("contadorCaracteres");

mensaje.addEventListener("input", () => {
    contadorCaracteres.textContent = `${mensaje.value.length} / 300`;
});