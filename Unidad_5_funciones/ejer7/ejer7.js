// Escribe una función que reciba como argumento de entrada un array de números y averigue utilizando métodos del objeto Math cuál es el menor y el mayor de ellos.

var mayorMenor = function(lista){
    var minimo = Math.min(...lista);
    var maximo = Math.max(...lista);
    return [minimo , maximo]
}
console.log(mayorMenor([1,2,3,4,5,6,7,8,9,10,11]))

