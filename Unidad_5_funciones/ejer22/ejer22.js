/* 

Utiliza un map almacenar información sobre módulos impartidos en el IES de la siguiente manera:  ("DWECL", “Desarrollo Web en Entorno Cliente”). 
Añade la información con posterioridad a la creación de la estructura.

Muestra cuántos módulos hay almacenados
Muestra el contenido de la estructura
Devuelve las abreviaturas de todos los módulos guardados
Devuelve el nombre completo de todos los módulos
Consulta si está el módulo "DAW"
Si está, elimínalo.
Ordena alfabéticamente el map según las abreviaturas de los módulos

*/
var pedirmodulos = ()=>{
    parametro = " ";
    const modulos = new Map();
    while (parametro != ""){
        parametro = prompt("sigla del modulo, nombre del mondulo. \n Por ejemplo: DWECL, Desarrollo Web en Entorno Cliente")
        var lista = parametro.split(",")
        modulos.set(...lista)
    }
    modulos.delete("")
    return modulos
}


var modulos = pedirmodulos()

// modulos almacenados

var contarmodulos = (modulo) => {
    contador = 0;
    for (i of modulo.keys()){
        contador++;
    }
    return contador
}
console.log(contarmodulos(modulos))