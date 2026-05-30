//**********************************************************
// Laboratorio 1 - Ejercicio 4
// Danna Lopez  27-05-2026
//********************************************************** 



//*****************************************************
// Ejercicio 1: Bucle while

let limite = Number(prompt("Ingresa un número:"));

let contador = 1;

while (contador <= limite) {
    console.log(contador);
    contador++;
}


//*****************************************************
// Ejercicio 2

let contrasena = prompt("Ingresa la contraseña:");

while (contrasena !== "1234") {
    contrasena = prompt("Contraseña incorrecta. Intenta otra vez:");
}

console.log("Contraseña correcta");


