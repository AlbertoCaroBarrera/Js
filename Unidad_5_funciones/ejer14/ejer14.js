// Realizar un programa que permita introducir 2 matrices (hasta tamaño 3x3), y nos de la opción de sumarlas o multiplicarlas. El programa imprimirá las dos matrices y la matriz resultante (si la hubiera). 

var suma_filas = (fila1,fila2)=>{
    var suma = [];
    if (fila1.length==fila2.length) {
        for (var i=0; i<fila1.length; i++){
            suma.push(fila1[i]+fila2[i]);
        }
        return suma;
    } else {
        return "no se pueden sumar esas dos matrices";
    }
}


var suma_matrices = (matriz1,matriz2)=>{
    var matriz=[];
    if (matriz1.length==matriz2.length) {
        for (var i=0; i<matriz1.length; i++){
            matriz.push(suma_filas(matriz1[i],matriz2[i]));
        }
        return matriz;
    } else {
        return "no se pueden sumar esas dos matrices";
    }

}

// console.log(suma_filas([1,2,3],[4,5,6]))

// console.log(suma_matrices([[1,2],[3,2]],[[2,3],[3,2]]))


var multiplicar_listas = (lista1,lista2) => {
    if (lista1.length == lista2.length){
        var suma = 0;
        for (var i=0;i<lista1.length;i++){
            suma += lista1[i]*lista2[i]
        }
        return suma
    } else {
        return "No se pueden multiplicar"
    }
}

// console.log(multiplicar_listas([1,2,3],[4,5,6]))

var columnas = (matriz) => {
    var m = []
    for (var i=0;i<matriz[0].length;i++){
        var lista = []
        for (var j=0;j<matriz.length;j++){
            lista.push(matriz[j][i])
        }
        m.push(lista)
    }
    return m
}

console.log(columnas([[2,3,4],[1,2,3]]))

var multiplicar_matrices = (matriz1,matriz2) => {
    matriz = []
    for (i=0;i<matriz1.length;i++){
        matriz.push(multiplicar_listas(matriz1[i],matriz2[i]))
    }
}