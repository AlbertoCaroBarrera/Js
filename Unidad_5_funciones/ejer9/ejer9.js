// Escribe una función llamada elMenor que acepte un número variable de parámetros y devuelva el parámetro de menor valor pasado a la función.

var elMenor = function(...args) {
    return Math.min(...args)
}

console.log(elMenor(4,2,1,33,4,5))

// Escribe una función llamada colocaEnMedio que acepte como parámetros dos arrays y devuelva el primer array con todos los valores del segundo array colocados en el centro del primer array. 

var colocadosEnMedio = function(lista1,lista2){
    var valormedio = Math.floor(lista1.length/2)
    return lista1.slice(0,valormedio).concat(lista2).concat(lista1.slice(valormedio,lista1.length))
}

console.log(colocadosEnMedio([1,2,3,4,5,6],[7,8,9,10]))

// Escribe una función llamada uneArrays que acepte un número variable de parámetros (cada uno de ellos será un array) y devuelva un nuevo array con todos los parámetros concatenados.

var uneArrays = function(...listas){
    
    var lista = []
    for (i=0;i<listas.length;i++){
        lista = lista.concat(listas[i])
    }
    return lista
}

console.log(uneArrays([1,2,3],[4,5],[6,7]))

// Escribe una función llamada sumaArgPares que sume todos los argumentos pares que se pasen a la función.

var sumaArgPares = function(...numeros){
    var suma = 0
    for (i=0;i<numeros.length;i++){
        if (numeros[i]%2==0){
            suma += numeros[i];
        }
    }
    return suma
}

console.log(sumaArgPares(1,2,3,4))
console.log(sumaArgPares(1,2,6))














