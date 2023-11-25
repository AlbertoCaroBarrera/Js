/*
Crear un objeto Aula que contenga los alumnos de un aula y tenga los siguientes métodos:
buscar un alumno del aula por DNI.
ordenar por nota para un alumno en particular
ordenar el array de alumnos por apellido
imprimir los alumnos de un aula. 
*/

const a1 = new Alumno("Alberto","Caro","00112233f","2003/01/02","2daw",new Map([["servidor",8],["cliente",8],["empresa",5]]))
const a2 = new Alumno("Miguel","Perez","10112233f","2002/02/03","2daw",new Map([["servidor",6],["cliente",7],["empresa",8]]))
const a3 = new Alumno("Maria","Álvarez","22112233f","2001/03/04","2daw",new Map([["servidor",1],["cliente",2],["empresa",3]]))
const lista = [a1,a2,a3]


class Aula {
    constructor(alumnos){
        this.alumnos = alumnos;
    }
    buscar_alumno(dni){
        return buscarPersona(this.alumnos,"dni",dni)[0]
    }
    ordenar_nota(dni){
        var alumno = buscar_alumno(dni)
        // quiere las notas del alumno ordenado? o al objeto alumno con sus asignaturas ordenadas por nota?
    }
    ordenar_apellidos(){
        var lista_apellidos = []
        var alumnos_ordenados = []

        for (let alumno of this.alumnos){
            lista_apellidos.push(alumno.apellidos)
        }

        lista_apellidos.sort((a, b) => a.localeCompare(b));

        for (let ordenado of lista_apellidos){
            for (let alumno of this.alumnos){
                if (alumno.apellidos == ordenado){
                    alumnos_ordenados.push(alumno)
                }
            }
        }
        return alumnos_ordenados
    }
    imprimir_aula(){    
        for (let alumno of this.alumnos){
            alumno.imprimir_alumno()  
        }

    }
}

//const aula1 = new Aula(lista);
//console.log(aula1.buscar_alumno("00112233f"))
//console.log(aula1.ordenar_apellidos())
//aula1.imprimir_aula()