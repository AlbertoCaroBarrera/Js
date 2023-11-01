//  Dada una cadena leída por teclado, realizar un programa que extraiga los números que aparecen en dicha secuencia e imprima por pantalla dichos números y su suma. 

var extraeNum = (cadena) => {
    var suma = 0;
    var expReg = /\d/g
    var numeros = cadena.match(expReg);
    for (i of numeros.map(Number)){
        suma += i
    }
    return suma
}

console.log(extraeNum("a2a3jdjgfh9  22asdf7"))