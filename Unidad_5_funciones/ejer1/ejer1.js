// Hacer un programa que compruebe si un número es perfecto. Deberá implementarse una función esPerfecto(numero) que devuelva true si lo es

var suma = function(lista){
    var valor = 0;
    for (var i = 0; i < lista.length; i++){
        valor += lista[i];
    }
    return valor;
}

var divisores = function(numero){
    var lista = []
    var valor = (numero - 1)
    while (valor!=0){
        if (numero%valor==0){
            lista.push(valor)
        }
        valor--
    }
    return lista
}

console.log(divisores(8))
console.log(suma(divisores(8)))
console.log(suma(divisores(6)))

var esPerfecto = function(numero){
    if (suma(divisores(numero))==numero){
        return true
    }
    else{
        return false
    }
}

console.log(esPerfecto(6))

console.log(esPerfecto(8))