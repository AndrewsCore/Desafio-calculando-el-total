// variables
let precio = 400000;
let cantidad = 0;

// Selección de elementos
const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const valorTotalSpan = document.querySelector(".valor-total");

// Selección de botones + y -
const btnAumentar = document.querySelector("button:nth-of-type(1)");
const btnDisminuir = document.querySelector("button:nth-of-type(2)");

// Inicialización de la pantalla
precioSpan.innerHTML = precio;

// Función para actualizar los totales en el HTML
function actualizarPantalla() {
    cantidadSpan.innerHTML = cantidad;
    valorTotalSpan.innerHTML = precio * cantidad ;
}

// Evento click aumentar
btnAumentar.addEventListener("click", () => {
    cantidad++;
    actualizarPantalla();
});

// Evento click disminuir
btnDisminuir.addEventListener("click", () => {
    if (cantidad > 0) {
        cantidad--;
        actualizarPantalla();
    }
});