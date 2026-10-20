# ☕ Café Aroma — Página web

Sitio web de **Café Aroma**, una cafetería de especialidad (ficticia) ubicada en Trujillo, Perú.
La página presenta la cafetería, muestra su menú con precios, permite armar un pedido,
recoge opiniones de clientes y ofrece un formulario de contacto y reservas.

Proyecto colaborativo del curso **Full Stack Developer — SENATI**, desarrollado con
control de versiones en **Git**, **GitKraken** y **GitHub**, con una rama por integrante.

---

## 🎯 Objetivo

Crear una página web estática y responsive **sin base de datos**, trabajada en equipo,
donde cada integrante desarrolla su parte en su propia rama y luego se integran
mediante merges a `develop` y finalmente a `master`.

## 🧭 Secciones de la página

| Sección | Qué muestra |
|---|---|
| **Inicio** | Portada a pantalla completa con texto animado y aviso de *Abierto / Cerrado* según la hora real. |
| **Nosotros** | Historia de la cafetería, estadísticas animadas (años, productores, clientes) y beneficios: orgánico, comercio justo, tostado local y Wi-Fi. |
| **Menú** | Productos con foto, descripción y precio en soles. Incluye buscador y filtros por categoría (Café, Fríos, Postres). |
| **Pedido** | Carrito lateral para agregar productos, cambiar cantidades y ver el total. |
| **Opiniones** | Carrusel automático con testimonios de clientes. |
| **Contacto** | Dirección, teléfono, horario, mapa y formulario de reserva o consulta con validación. |

## ✨ Funcionalidades

- Diseño **responsive** con menú hamburguesa para celular.
- Header que cambia de color al hacer scroll y marca la sección activa.
- Animaciones al aparecer los elementos y contadores numéricos.
- Buscador y filtros del menú en tiempo real.
- Carrito de pedido guardado en el navegador con `localStorage`, sin servidor.
- Carrusel de testimonios con flechas, puntos y avance automático.
- Formulario con validación de campos, contador de caracteres y mensajes de error.
- Avisos flotantes ("toast") y botón para volver arriba.