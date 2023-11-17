var suma = (diccionario) => {
    var lista = [...diccionario.values()]
    var contador = 0;
    for (numero of lista){
        contador += numero;
    }
    return contador
}

var imprimir_notas = (diccionario) => {
    var cadena = ""

}



class Alumno extends Persona{
    constructor(nombre,apellidos,dni,fecha,curso,notas){
        super(nombre,apellidos,dni,fecha)
        this.curso = curso
        this.notas = notas
    }
    imprimir_alumno(){
        var cadena = ""
        cadena += this.nombre + " " + this.apellidos + " " + this.dni + " " + this.fecha + " " + this.curso + " " + this.notas
        document.write(cadena)
    }
    nota_media(){
        return (suma(this.notas))/((this.notas.values()).length)
    }
    mejor_nota(){new map([["servidor",7],["cliente",8],["empresa",4]])
        var mejor = Math.max(...this.notas.values())
        
    }
}

const a1 = new Alumno("Alberto","Caro","00112233f","2000/01/01","2daw",new Map([["servidor",7],["cliente",8],["empresa",4]]))
console.log(a1.nota_media())

// console.log(a1.mejor_nota())
