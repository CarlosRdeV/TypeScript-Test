interface Usuario{
    nombreUsuario:string;
    password:string;
    confirmarPassword?:string; //Podemos definir un atributo como opcional con ?
}

let usuario1:Usuario = {nombreUsuario:"Juan",password:"12345",confirmarPassword:"12345"} //Objeto con todos los atributos
let usuario2:Usuario = {nombreUsuario:"Carlos",password:"12345"} //Objeto sin opcional
 
console.log(usuario1); //Mostramos en consola todo el objeto
console.log(usuario2); //Mostramos en consola el objeto sin opcional
console.log(usuario1.nombreUsuario); //Tambien podemos acceder a un solo elemento del objeto

interface Abordar{
    abordarTransporte():void;
}

let avion:Abordar = {
 abordarTransporte: function(){
     console.log("Abordando");
 }
}

avion.abordarTransporte();