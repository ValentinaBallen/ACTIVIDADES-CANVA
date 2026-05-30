//**********************************************************
// Laboratorio 1 - Ejercicio 3
// Danna Lopez  27-05-2026
//********************************************************** 



//*****************************************************
// Ejercicio 1: Condicional if

let edadEntrada = Number(prompt("Ingresa tu edad:"));

if (edadEntrada >= 18) {
    console.log("Puedes entrar");
} else {
    console.log("No puedes entrar");
}


//*****************************************************
// Ejercicio 2

let numero = Number(prompt("Ingresa un número:"));

if (numero > 0) {
    console.log("Es positivo");
} else if (numero < 0) {
    console.log("Es negativo");
} else {
    console.log("Es cero");
}