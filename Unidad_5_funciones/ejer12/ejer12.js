// Hallar los primeros N primos mediante el algoritmo de Criba de Eratóstenes. 

var multiplo = (a,b)=>{
    if (a%b==0){
        return true
    }
    else{
        return false
    }
}

var borrarmultiplo = (lista)=>{
    var sinmultiplos = []
    for (var i=0;i<lista.length;i++) {
        if (multiplo(lista[i],lista[0])==false){
            sinmultiplos.push(lista[i])
        }
    }
    return sinmultiplos
}

console.log(borrarmultiplo([2,3,4,5,6,7,8,9,10,11]))

var crearlista = (n)=>{
    var lista = []
    for (var i=2;i<=n;i++) {
        lista.push(i)
    }
    return lista
}

console.log(crearlista(5))

var criba = (n)=>{
    var valores = crearlista(n);
    var criba = [];
    for (var i=0;i<=valores.length;i++){
        criba.push(valores[0])
        valores = borrarmultiplo(valores);

    }
    return criba
}

console.log(criba(299))