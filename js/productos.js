
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