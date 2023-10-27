// Hacer un programa que compruebe si un número es perfecto. Deberá implementarse una función esPerfecto(numero) que devuelva true si lo es

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

divisores(8)