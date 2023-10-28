// 8 Realizar la función esPalindromo(cadena) de manera recursiva.

var esPalindromo = function(cadena) {
    if (cadena.length <= 1) {
        return true
    }
    if (cadena[0] == cadena[cadena.length - 1]) {
        return esPalindromo(cadena.slice(1, -1))
    } else {
        return false
    }
}

console.log(esPalindromo("aeiouuoiea"))

console.log(esPalindromo("a"))

console.log(esPalindromo("aeiouuoie"))