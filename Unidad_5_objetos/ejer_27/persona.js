class Persona{
    constructor(nombre,apellidos,dni,fecha){
        this.nombre = nombre
        this.apellidos = apellidos
        this.dni = dni
        this.fecha = fecha
        this.edad = calcular_edad(fecha)
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