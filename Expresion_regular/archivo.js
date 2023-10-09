/*
var correo_electronico = "albertocarobarrera@poligonosur.org";

//var expr = /...@/g;
//console.log(expr.test(correo_electronico))
var expr2 = /[a-z]{3,}@/g;

if (expr2.test(correo_electronico)) {
    console.log("Correcto")
} else {
    console.log("Incorrecto")
}
*/
//Con expresiones regulares, leer desde teclado una cadena con una serie de nombres. Contar cuántos nombres se han leído, cuántos comienzan C.

var nombres = "Juan Carmen Maria Manolo Fer Carlos"

var expr = /(\w+\s|\w+$)/gi

console.log (expr.exec(nombres))

