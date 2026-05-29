// ******************************************
// EJERCICIO 1: Calculadora de Propinas
// ******************************************


function calcularPropina(total, porcentaje) {
    let propina = total * (porcentaje / 100);
    return total + propina;
}

console.log("Total con propina:", calcularPropina(100000, 10));


// ******************************************
// EJERCICIO 2: Validar Contraseña
// ******************************************

function validarContraseña(contraseña) {

    let tieneLongitud = contraseña.length >= 8;
    let tieneNumero = /\d/.test(contraseña);
    let tieneMayuscula = /[A-Z]/.test(contraseña);

    return tieneLongitud && tieneNumero && tieneMayuscula;
}

console.log(validarContraseña("Hola123")); // true
console.log(validarContraseña("hola")); // false


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


// *****************************************************
// EJERCICIO 4: Calcular Promedio de Notas
// *****************************************************

function calcularPromedio(notas) {

    let suma = 0;

    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }

    let promedio = suma / notas.length;

    return promedio.toFixed(2);
}

// Simulación de notas ingresadas por el usuario
let notasUsuario = "5.0,4.5,5,4";

// Convertir string en array de números
let notas = notasUsuario.split(",").map(Number);

console.log("Promedio:", calcularPromedio(notas));


// ******************************************
// EJERCICIO 5: Filtrar Usuarios por Edad
// ******************************************

const usuarios = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 17 },
    { nombre: "Carlos", edad: 30 },
    { nombre: "Sofía", edad: 19 }
];

function filtrarUsuarios(usuarios, edadMinima) {

    return usuarios.filter(usuario => usuario.edad >= edadMinima);
}

console.log(filtrarUsuarios(usuarios, 18));


// ******************************************
// EJERCICIO 6: Contador de Palabras
// ******************************************

function contarPalabras(texto) {

    let palabras = texto.trim().split(" ");

    return palabras.length;
}

console.log(contarPalabras("Hola este es el ejercicio 6 de JavaScript"));


// ******************************************
// EJERCICIO 7: Simulador de Cajero Automático
// ******************************************

function retirarDinero(saldo, monto) {

    if (monto > saldo) {
        return "Fondos insuficientes";
    } else {
        let nuevoSaldo = saldo - monto;
        return `Retiro exitoso. Nuevo saldo: ${nuevoSaldo}`;
    }
}

console.log(retirarDinero(500000, 100000));
console.log(retirarDinero(50000, 100000));


// ******************************************
// EJERCICIO 8: Cambio de Moneda
// ******************************************

function convertirMoneda(monto, monedaDestino) {

    const tasaUSD = 0.00025;
    const tasaCOP = 0.00010; 

    if (monedaDestino === "USD") {
        return (monto * tasaUSD).toFixed(2) + " USD";

    } else if (monedaDestino === "COP") {
        return (monto * tasaCOP).toFixed(2) + " COP";

    } else {
        return "Moneda no válida";
    }
}

console.log(convertirMoneda(1000000, "USD"));
console.log(convertirMoneda(5000000, "COP"));