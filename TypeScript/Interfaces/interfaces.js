"use strict";
var usuario1 = { nombreUsuario: "Juan", password: "12345", confirmarPassword: "12345" }; //Objeto con todos los atributos
var usuario2 = { nombreUsuario: "Carlos", password: "12345" }; //Objeto sin opcional
console.log(usuario1); //Mostramos en consola todo el objeto
console.log(usuario2); //Mostramos en consola el objeto sin opcional
console.log(usuario1.nombreUsuario); //Tambien podemos acceder a un solo elemento del objeto
var avion = {
    abordarTransporte: function () {
        console.log("Abordando");
    }
};
avion.abordarTransporte();
