
// arreglo y busqueda de productos - seccion productos disponbles



const img = id => `https://images.unsplash.com/${id}?w=500`;

const productos = [
    { id: 1, nombre: "Espresso",         precio: 6.00,  categoria: "cafe",   etiqueta: "Clásico",  desc: "Intenso y aromático, de Cajamarca.",      imagen: img("photo-1510591509098-f4fdc6d0ff04") },
    { id: 2, nombre: "Capuccino",        precio: 9.50,  categoria: "cafe",   etiqueta: "Favorito", desc: "Espresso con leche espumosa y canela.",   imagen: img("photo-1572442388796-11668a67e53d") },
    { id: 3, nombre: "Latte",            precio: 10.00, categoria: "cafe",   etiqueta: "",         desc: "Suave, cremoso y con arte latte.",        imagen: img("photo-1561882468-9110e03e0f78") },
    { id: 4, nombre: "Americano",        precio: 7.00,  categoria: "cafe",   etiqueta: "",         desc: "Espresso alargado con agua caliente.",    imagen: img("photo-1497935586351-b67a49e012bf") },
    { id: 5, nombre: "Café helado",      precio: 11.00, categoria: "frio",   etiqueta: "Nuevo",    desc: "Cold brew de 18 horas con hielo.",        imagen: img("photo-1517701604599-bb29b565090c") },
    { id: 6, nombre: "Frappé de mocha",  precio: 13.00, categoria: "frio",   etiqueta: "",         desc: "Café, chocolate y crema batida.",         imagen: img("photo-1572490122747-3968b75cc699") },
    { id: 7, nombre: "Cheesecake",       precio: 12.00, categoria: "postre", etiqueta: "Favorito", desc: "Con salsa de maracuyá.",                  imagen: img("photo-1533134242443-d4fd215305ad") },
    { id: 8, nombre: "Alfajor",          precio: 4.50,  categoria: "postre", etiqueta: "",         desc: "Relleno de manjar blanco artesanal.",     imagen: img("photo-1558961363-fa8fdf82db35") },
    { id: 9, nombre: "Brownie",          precio: 7.00,  categoria: "postre", etiqueta: "",         desc: "Chocolate 70% cacao peruano.",            imagen: img("photo-1606313564200-e75d5e30476c") }
];



// funcion para buscar y mostrar productos

const grid = document.getElementById("gridProductos");
const buscador = document.getElementById("buscador");
const sinResultados = document.getElementById("sinResultados");
let categoriaActual = "todos";

function mostrarProductos() {
    const texto = buscador.value.toLowerCase().trim();
    const lista = productos.filter(p =>
        (categoriaActual === "todos" || p.categoria === categoriaActual) &&
        p.nombre.toLowerCase().includes(texto)
    );

    sinResultados.style.display = lista.length ? "none" : "block";
    grid.innerHTML = lista.map(p => `
        <article class="tarjeta">
            <div class="tarjeta-img">
                <img src="${p.imagen}" alt="${p.nombre}" loading="lazy">
                ${p.etiqueta ? `<span class="etiqueta">${p.etiqueta}</span>` : ""}
            </div>
            <div class="tarjeta-cuerpo">
                <h3>${p.nombre}</h3>
                <p class="desc">${p.desc}</p>
                <div class="tarjeta-pie">
                    <span class="precio">S/ ${p.precio.toFixed(2)}</span>
                    <button class="btn-agregar" data-id="${p.id}">+ Agregar</button>
                </div>
            </div>
        </article>
    `).join("");
}

document.querySelectorAll(".filtro").forEach(boton => {
    boton.addEventListener("click", () => {
        document.querySelector(".filtro.activo").classList.remove("activo");
        boton.classList.add("activo");
        categoriaActual = boton.dataset.categoria;
        mostrarProductos();
    });
});
buscador.addEventListener("input", mostrarProductos);


// seccion carrito de compras - cargar y guardar

let carrito = cargarCarrito();

function cargarCarrito() {
    try { return JSON.parse(localStorage.getItem("carritoCafe")) || []; }
    catch { return []; }
}
function guardarCarrito() {
    try { localStorage.setItem("carritoCafe", JSON.stringify(carrito)); } catch {}
}

grid.addEventListener("click", e => {
    if (!e.target.matches(".btn-agregar")) return;
    const id = +e.target.dataset.id;
    const item = carrito.find(i => i.id === id);
    item ? item.cantidad++ : carrito.push({ id, cantidad: 1 });
    const contador = document.getElementById("contadorCarrito");
    contador.classList.remove("saltar"); void contador.offsetWidth; contador.classList.add("saltar");
    mostrarAviso(`${productos.find(p => p.id === id).nombre} agregado ☕`);
    actualizarCarrito();
});


function actualizarCarrito() {
    const lista = document.getElementById("carritoLista");
    let total = 0, unidades = 0;

    lista.innerHTML = carrito.length ? carrito.map(item => {
        const p = productos.find(prod => prod.id === item.id);
        total += p.precio * item.cantidad;
        unidades += item.cantidad;
        return `
            <li>
                <span>${p.nombre}<br><small>S/ ${(p.precio * item.cantidad).toFixed(2)}</small></span>
                <div class="cantidad">
                    <button data-accion="restar" data-id="${p.id}">−</button>
                    <span>${item.cantidad}</span>
                    <button data-accion="sumar" data-id="${p.id}">+</button>
                </div>
            </li>`;
    }).join("") : `<li class="vacio">Tu pedido está vacío</li>`;

    document.getElementById("carritoTotal").textContent = `S/ ${total.toFixed(2)}`;
    document.getElementById("contadorCarrito").textContent = unidades;
    guardarCarrito();
}

document.getElementById("carritoLista").addEventListener("click", e => {
    const accion = e.target.dataset.accion;
    if (!accion) return;
    const item = carrito.find(i => i.id === +e.target.dataset.id);
    item.cantidad += accion === "sumar" ? 1 : -1;
    if (item.cantidad === 0) carrito = carrito.filter(i => i !== item);
    actualizarCarrito();
});



const panel = document.getElementById("carrito");
const overlay = document.getElementById("overlay");
const abrirCarrito = () => { panel.classList.add("abierto"); overlay.classList.add("visible"); };
const cerrarCarrito = () => { panel.classList.remove("abierto"); overlay.classList.remove("visible"); };
document.getElementById("btnCarrito").addEventListener("click", abrirCarrito);
document.getElementById("cerrarCarrito").addEventListener("click", cerrarCarrito);
overlay.addEventListener("click", cerrarCarrito);

document.getElementById("btnVaciar").addEventListener("click", () => {
    carrito = [];
    actualizarCarrito();
});
document.getElementById("btnConfirmar").addEventListener("click", () => {
    if (!carrito.length) return mostrarAviso("Agrega algo a tu pedido primero");
    mostrarAviso("¡Pedido confirmado! Te esperamos 🎉");
    carrito = [];
    actualizarCarrito();
    cerrarCarrito();
});