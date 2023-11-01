// Realizar una función que rellene un matriz de orden N de número aleatorios. 

var fila_aleatoria = (n)=>{
    var lista = [];
    for (var i=0; i<n; i++){
        lista.push(Math.random())
    }
    return lista
}
console.log(fila_aleatoria(3))

var matriz_aleatoria = (n)=>{
    var matriz = []
    for (var i=0; i<n; i++){
        matriz.push(fila_aleatoria(n))
    }
    return matriz
}

console.log(matriz_aleatoria(3))