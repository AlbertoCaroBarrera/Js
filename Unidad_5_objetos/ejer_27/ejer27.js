function calcular_edad(cadena){
    const fecha = Date.parse(new Date());
    return Math.floor((fecha - Date.parse(cadena))/(1000*60*60*24*365.25))
}
// Implementar el ejercicio 20 y 21(sólo imprimir los datos), usando objetos. (P.e. clase Persona) 


var buscarPersona = (lista,dato,valor) => {
    var l = []
    for (let persona of lista){
        if (persona[dato]==valor){
            l.push(persona)
        }
    }
    return l
}

const p1 = new Persona("pepe","martin","30203020f","1994/12/15")
const p2 = new Persona("antonio","perez","30203020f","1994/12/15")
const p3 = new Persona("antonio","martin","20202020o","1990/01/12")
var l = [p1,p2,p3]

//console.log(buscarPersona(l,"edad",28))

/* ejercicio 21 */

var mayorEdad = (lista) => {
    var edades = []
    for (let p of lista){
        edades.push(Date.parse(p["fecha"]))
    }
    var mayor = Math.min(...edades)
    var persona = lista.find( (persona) => Date.parse(persona["fecha"]) == mayor  )
    return persona
}

// console.log(mayorEdad(l))

var menorEdad = (lista) => {
    var edades = []
    for (let p of lista){
        edades.push(Date.parse(p["fecha"]))
    }
    var menor = Math.max(...edades)
    var persona = lista.find( (persona) => Date.parse(persona["fecha"]) == menor  )
    return persona
}


var modificarDatos = (lista,dni,tipoDato,valor) => {
    var l = buscarPersona(lista,"dni",dni)
    for (persona of lista){
        if (persona["dni"]==dni){
            persona[tipoDato]=valor
        }
    }
    //return lista
}

//console.log(modificarDatos(l,"20202020o","nombre","jose"))

var eliminaUsuario = (lista,dni) => {
    var l = buscarPersona(lista,"dni",dni)
    var indice = lista.indexOf(l[0])
    if (indice !== -1){
        lista.splice(indice,1)
    }
    // return lista
}

// console.log(eliminaUsuario(l,"20202020o"))

