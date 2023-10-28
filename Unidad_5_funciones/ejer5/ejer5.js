// Hacer un programa para generar el siguiente primo a uno dado. Deben usarse funciones. 
var divisores = function(numero){
    var lista = []
    var valor = numero
    while (valor!=0){
        if (numero%valor==0){
            lista.push(valor)
        }
        valor--
    }
    return lista
}

var esPrimo = function(numero){
    if (divisores(numero).length==2){
        return true
    } else {
        return false
    }
}

var siguientePrimo = function(numero){
    if (esPrimo(numero)){
        var primo = numero + 1;
        while (esPrimo(primo)==false){
            primo++;
        }
        return primo
    } else {
        return "el numero introducido no es primo"
    }
}
console.log(siguientePrimo(13))
console.log(siguientePrimo(133))
console.log(siguientePrimo(397))

