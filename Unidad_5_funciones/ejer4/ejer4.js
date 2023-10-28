// Realizar una función que pase una cantidad de Mbyte, Kbytes y bytes a bytes. Probadla en una página.
// Como que probar en una pagina?

var convertirBytes = function(Mbyte, Kbytes, bytes) {
    var bytestotales = bytes + Kbytes*1000 + Mbyte*1000000
    return bytestotales
}

console.log(convertirBytes(3,4,80))