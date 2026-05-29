
//*****************************************************
// Ejercicio 1: Variables y tipos de Datos

let nombre = "Danna";
let edad = 26;
let estudiante = true; 

console.log(nombre);
console.log(edad);
console.log(estudiante);

//*****************************************************
// Ejercicio 2

let sinValor;
let valorNulo = null;

console.log(sinValor);   
console.log(valorNulo); 


//*****************************************************
// Ejercicio 1: Ingreso de Datos 

let anioNacimiento = prompt("Ingresa tu año de nacimiento:");
let edadUsuario = 2026 - Number(anioNacimiento);

console.log("Tu edad es: " + edadUsuario);


//*****************************************************
// Ejercicio 2

let numero1 = prompt("Ingresa el primer número:");
let numero2 = prompt("Ingresa el segundo número:");

numero1 = Number(numero1);
numero2 = Number(numero2);

console.log("La suma es: " + (numero1 + numero2));


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


//*****************************************************
// Ejercicio 1: Bucle for

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


//*****************************************************
// Ejercicio 2

let tabla = Number(prompt("Ingresa un número para ver su tabla:"));

for (let i = 1; i <= 10; i++) {
    console.log(tabla + " x " + i + " = " + (tabla * i));
}