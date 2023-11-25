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
    claves = [...diccionario.keys()]
    valores = [...diccionario.values()]
    for (let i=0; i<claves.length; i++){
        cadena += "Asignatura: " + claves[i] + " Nota: " + valores[i] + "<br>"
    }
    return cadena
}

//console.log(imprimir_notas(new Map([["servidor",7],["cliente",8],["empresa",4]])))


class Alumno extends Persona{
    constructor(nombre,apellidos,dni,fecha,curso,notas){
        super(nombre,apellidos,dni,fecha)
        this.curso = curso
        this.notas = notas
    }
    imprimir_alumno(){
        var cadena = ""
        cadena += "Nombre: " + this.nombre + "<br>Apellido: " + this.apellidos + "<br>Dni: " + this.dni + "<br>Fecha: " + this.fecha + "<br>Curso: " + this.curso + "<br>Notas:<br> " + imprimir_notas(this.notas)
        document.write(cadena)
    }
    nota_media(){
        return (suma(this.notas))/([...this.notas.values()].length)
    }
    mejor_nota(){
        var solucion = new Map()
        var asignaturas = [...this.notas.keys()]
        var notas = [...this.notas.values()]
        var mejor = Math.max(...notas)
        for (let i = 0; i < asignaturas.length; i++){
            if (notas[i] == mejor){
                solucion.set(asignaturas[i],mejor)
            }
        }
        return solucion
    }
}

//const a1 = new Alumno("Alberto","Caro","00112233f","2000/01/01","2daw",new Map([["servidor",8],["cliente",8],["empresa",4]]))

//console.log(a1.imprimir_alumno())
//console.log(a1.nota_media())
//console.log(a1.mejor_nota())
