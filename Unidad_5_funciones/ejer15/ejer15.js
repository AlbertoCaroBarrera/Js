// Averiguar cúal es el número que más y el (o los) que menos se repite(n) en un array

var cantidad = (a,lista)=>{
    var i = 0;
    var valor = 0;
    while (i < lista.length) {
        if (a==lista[i]){
            valor ++
        }
        i++
    }
    return valor;
}
console.log(cantidad(2,[1,2,3,4,5,1,2,3,4,5,2,2,2,1,2,3]))

var maxCantidad = (lista)=>{
    var valores=[];
    var repeticiones = 0;
    for (i of lista){
        if (cantidad(i,lista)>repeticiones){
            repeticiones = cantidad(i,lista)
        }
    }
    for (i of lista){
        if (cantidad(i,lista)==repeticiones && valores.includes(i)==false){
            valores.push(i);
        }
    }
    return valores
}

var minCantidad = (lista)=>{
    var valores=[];
    var repeticiones=cantidad(lista[0],lista);
    for (i of lista){
        if (cantidad(i,lista)<repeticiones){
            repeticiones = cantidad(i,lista)
        }
    }
    for (i of lista){
        if (cantidad(i,lista)==repeticiones && valores.includes(i)==false){
            valores.push(i);
        }
    }
    return valores
}

console.log(maxCantidad([1,2,3,4,5,1,2,3,4,5,2,2,2,1,2,3,3,4,4,4,4]))

console.log(minCantidad([1,2,3,4,5,1,2,3,4,5,2,2,2,1,2,3,3,4,4,4,4]))