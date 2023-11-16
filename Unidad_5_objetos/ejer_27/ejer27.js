// Implementar el ejercicio 20 y 21(sólo imprimir los datos), usando objetos. (P.e. clase Persona) 

class Persona{
    constructor(nombre,apellidos,dni,fecha){
        this.nombre = nombre
        this.apellidos = apellidos
        this.dni = dni
        this.fecha = fecha
    }
    imprimir(){
        var cadena = ""
        cadena += this.nombre + " "
        cadena += this.apellidos + " "
        cadena += this.dni + " "
        cadena += this.fecha
        document.write(cadena)
    }
}

var buscarPersona = (lista,dato,valor) => {
    var l = new Array()
    for (let persona of lista){
        if (lista[0][dato]==valor){
            l.push(persona)
        }
    }
    return l
}

p1 = new Persona("pepe","martin","30203020f","1994/12/15")
p2 = new Persona("antonio","perez","30203020f","1994/12/15")


console.log(buscarPersona([p1,p2],"nombre","pepe"))