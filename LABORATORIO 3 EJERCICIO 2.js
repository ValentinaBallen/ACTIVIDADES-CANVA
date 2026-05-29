//**********************************************************
// Laboratorio 3 - Ejercicio 2
// Danna Lopez  29-05-2026
//**********************************************************   

function ListaCompras() {
    this.productos = [];

    this.agregar = function (producto) {
        this.productos.push(producto);
    };

    this.mostrar = function () {
        console.log("Prendas disponibles");

        for (let i = 0; i < this.productos.length; i++) {
            console.log(`${i + 1}. ${this.productos[i]}`);
        }
    };
}

// Crear stock
let lista = new ListaCompras();

// Inventario de prendas
lista.agregar("Pantalones");
lista.agregar("Camisas");
lista.agregar("Sacos");

// Mostrar lista
lista.mostrar();