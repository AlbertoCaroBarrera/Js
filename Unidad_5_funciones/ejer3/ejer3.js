// 3 Realizar un programa que calcule el número de cifras de un número. Deberá implementarse una función numCifras(numero) que devuelva el número de cifras del mismo. Utiliza el operador spread.
//supongo que es entero
// es necesario el spread o es para encontrar la forma?



var numero = parseInt(prompt("Introduce un numero entero"))
var numCifras = function(numero) {
    cadena = String(numero)
    return cadena.length
}

console.log(numCifras(numero))
