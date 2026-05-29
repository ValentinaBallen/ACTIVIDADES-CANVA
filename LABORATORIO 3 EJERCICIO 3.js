//**********************************************************
// Laboratorio 3 - Ejercicio 3
// Danna Lopez  29-05-2026
//**********************************************************   



function SPORIFY() {
    this.estado = "detenido";

    this.play = function () {
        if (this.estado === "detenido" || this.estado === "pausado") {
            this.estado = "reproduciendo";
            console.log("Reproduciendo música de tu sporify premium");
        } else {
            console.log("Ya se está reproduciendo música.");
        }
    };

    this.pausar = function () {
        if (this.estado === "reproduciendo") {
            this.estado = "pausado";
            console.log("Música pausada.");
        } else {
            console.log("No hay música reproduciéndose.");
        }
    };

    this.detener = function () {
        this.estado = "detenido";
        console.log("Música detenida.");
    };
}

// Prueba del ejercicio
let reproductor = new SPORIFY();

reproductor.play();
reproductor.play();
reproductor.pausar();
reproductor.play();
reproductor.detener();