// Diseñar un programa que compruebe si un texto contiene sólo caracteres de nuestro alfabeto. Deberá implementarse una función esAlfabetoEspaniol(texto) que devuelva true si lo es.
// incluimos puntos, comas y numeros??

expReg = /([a-z]|ñ|\s)/gi

var esAlfabetoEspaniol = function(texto){
    if (expReg.test(texto)){
        return true;
    } else {
        return false;
    }
}

console.log(esAlfabetoEspaniol("hola esto es un texto en español"));


