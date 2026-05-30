//**********************************************************
// Laboratorio 2- Ejercicio 5
// Danna Lopez  28-05-2026
//**********************************************************    


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


