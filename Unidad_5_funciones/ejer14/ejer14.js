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

console.log(suma_filas([1,2,3],[4,5,6]))

console.log(suma_matrices([[1,2],[3,2]],[[2,3],[3,2]]))
