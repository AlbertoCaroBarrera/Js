// Implementar el algoritmo de ordenación QuickSort. 

var ordenar = (lista)=>{
    if (lista.length<=1){
        return lista;
    }
    var pivote = lista[0];
    var lista1 = [];
    var lista2 = [];


    for (i of lista){
        if (i<pivote){
            lista1.push(i);
        } else if (i > pivote){
            lista2.push(i);
        }
    }
    return [...ordenar(lista1),pivote,...ordenar(lista2)]
}

console.log(ordenar([4, 2, 7, 1, 9, 5, 8]))