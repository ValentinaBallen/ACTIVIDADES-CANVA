//**********************************************************
// Laboratorio 2- Ejercicio 4
// Danna Lopez  28-05-2026
//**********************************************************    



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