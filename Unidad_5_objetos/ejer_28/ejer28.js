// Crear un clase Alumno con su nombre, DNI, ... (objeto Persona), curso y notas de cada módulo. Crear su constructor y un método para imprimir un Alumno, otro que devuelva la nota media y otro para obtener su mejor nota y el nombre del módulo con esa nota (puede tener la misma nota en varios módulos). 

class Alumno extends Persona{
    constructor(nombre,apellidos,dni,fecha,curso,notas){
        super(nombre,apellidos,dni,fecha)
        this.curso = curso
        this.notas = notas
    }
    imprimir_alumno(){
        
    }
}