//**********************************************************
// Laboratorio 3 - Ejercicio 1
// Danna Lopez  29-05-2026
//**********************************************************    

function Libro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;

    this.prestar = function () {
        if (this.prestado === false) {
            this.prestado = true;
            console.log(`El libro "${this.titulo}" ha sido prestado.`);
        } else {
            console.log(`Error: El libro "${this.titulo}" ya está prestado.`);
        }
    };
}

// Crear libro
let libro1 = new Libro("Chubasco", "Cielo Latini");

// Probar dos veces
libro1.prestar();
libro1.prestar();