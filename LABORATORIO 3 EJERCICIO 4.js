//**********************************************************
// Laboratorio 3 - Ejercicio 4
// Danna Lopez  29-05-2026
//**********************************************************   


function Carrito() {
    this.productos = [];
    this.total = 0;

    this.agregarProducto = function (nombre, precio) {
        this.productos.push({
            nombre: nombre,
            precio: precio
        });

        this.total += precio;

        console.log(`${nombre} agregado. Precio: $${precio}`);
    };

    this.calcularDescuento = function () {
        let descuento = 0;

        if (this.total > 100) {
            descuento = this.total * 0.10;
            console.log(`Descuento aplicado: 10% ($${descuento})`);
        } else if (this.total > 50 && this.total <= 100) {
            descuento = this.total * 0.05;
            console.log(`Descuento aplicado: 5% ($${descuento})`);
        } else {
            console.log("No aplica descuento.");
        }

        let totalFinal = this.total - descuento;

        console.log(`Total original: $${this.total}`);
        console.log(`Total a pagar: $${totalFinal}`);
    };
}

// Crear carrito
let carrito = new Carrito();

// Agregar productos
carrito.agregarProducto("Mouse", 60);
carrito.agregarProducto("Teclado", 80);
carrito.agregarProducto("Audífonos", 90);

// Calcula descuento
carrito.calcularDescuento();