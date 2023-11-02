// Hacer un programa en el que el usuario que introduzca, nombre, apellidos, DNI y fecha de nacimiento separado por comas. 
//Esta entrada de datos se repetirá hasta que el usuario introduzca la cadena vacía. El programa debe guardar los datos en un array bidimensional.


var pedirdatos = ()=>{
    var matriz = [];
    parametro = " ";
    while (parametro != ""){
        parametro = prompt("nombre,apellidos,dni,fecha de nacimiento")
        matriz.push(parametro.split(","))
    }
    return matriz
}