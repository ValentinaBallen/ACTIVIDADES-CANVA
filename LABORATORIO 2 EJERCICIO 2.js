//**********************************************************
// Laboratorio 2 - Ejercicio 2
// Danna Lopez  29-05-2026
//**********************************************************    


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