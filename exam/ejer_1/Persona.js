class Persona{
    constructor(nombre,apellido,dni){
        this.nombre = nombre;
        this.apellido =apellido;
        this.dni = dni;
    }
    imprimir(){
        var cadena = ""
        cadena += this.nombre + " " + this.apellido + " " + this.dni
        return cadena
    }
}