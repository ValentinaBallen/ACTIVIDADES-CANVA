//**********************************************************
// Laboratorio 2- Ejercicio 6
// Danna Lopez  28-05-2026
//**********************************************************    


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