// Hacer un programa que sume todos los parámetros pasados como argumentos de entrada en la llamada. El número de argumentos de entrada es desconocido.

var suma = function(...args) {
    var lista = arguments;
    var valor = 0;
    for (var i = 0; i < lista.length; i++){
        valor += lista[i];
    }
    return valor;
}

console.log(suma(1,2,3,4,5,6,7,8,9,10))