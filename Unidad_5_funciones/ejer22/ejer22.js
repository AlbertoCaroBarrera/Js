/* 

Utiliza un map almacenar información sobre módulos impartidos en el IES de la siguiente manera:  ("DWECL", “Desarrollo Web en Entorno Cliente”). 
Añade la información con posterioridad a la creación de la estructura.

Muestra cuántos módulos hay almacenados


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
// console.log(contarmodulos(modulos))

// Muestra el contenido de la estructura

var optener_clave_valor = (diccionario) => {
    for (let i of diccionario.keys()) {
        document.write(i + ' ' + diccionario.get(i) + '<br>')
    }
}
// optener_clave_valor(modulos)


// Devuelve las abreviaturas de todos los módulos guardados
var abreviaturas = (modulo) => {
    var lista = [];
    for (let i of modulo.keys()){
        lista.push(i)
    }
    return lista
}

//console.log(abreviaturas(modulos))

// Devuelve el nombre completo de todos los módulos
var nombrecompleto = (modulo) => {
    var lista = [];
    for (let i of modulo.values()){
        lista.push(i)
    }
    return lista
}
//console.log(nombrecompleto(modulos))

// Consulta si está el módulo "DAW"

var estamodulo = (nombre,modulo) => {
    return modulo.has(nombre)
} 
//console.log(estamodulo('daw',modulos))


// Si está, elimínalo.

var eliminar = (nombre,modulo) => {
    modulo.delete(nombre)
}

// eliminar('daw',modulos)

// Ordena alfabéticamente el map según las abreviaturas de los módulos

