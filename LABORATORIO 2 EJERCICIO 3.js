//**********************************************************
// Laboratorio 2- Ejercicio 3
// Danna Lopez  28-05-2026
//**********************************************************    


// ******************************************
// EJERCICIO 3: Buscar Producto en Inventario tienda Lilipink
// ******************************************

const inventario = [
    { nombre: "Lenceria", precio: 100000 },
    { nombre: "Medias", precio: 50000 },
    { nombre: "Pantys", precio: 10000 }
];

function buscarProducto(nombre, inventario) {

    for (let i = 0; i < inventario.length; i++) {

        if (inventario[i].nombre.toLowerCase() === nombre.toLowerCase()) {
            return inventario[i];
        }
    }

    return null;
}

console.log(buscarProducto("Lenceria", inventario));
console.log(buscarProducto("Pantys", inventario));
console.log(buscarProducto("Medias", inventario));
