//**********************************************************
// Laboratorio 2 - Ejercicio 2
// Danna Lopez  29-05-2026
//**********************************************************    


// ******************************************
// EJERCICIO 1: Calculadora de Propinas
// ******************************************


function calcularPropina(total, porcentaje) {
    let propina = total * (porcentaje / 100);
    return total + propina;
}

console.log("Total con propina:", calcularPropina(100000, 10));
