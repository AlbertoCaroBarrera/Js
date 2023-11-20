/*

Usando una implementación de objetos ES6 para guardar la sesión de calificación de un piloto con los siguientes atributos: 
piloto; // Objeto piloto, contendrá su nombre y escudería. 
tiempo; // Contendrá los ms de la mejor vuelta 

Y teniendo un array de sesiones de calificación, usando sort(); escribir el código necesario para ordenar el array de calificación por: 

A. Tiempos. 
B. Nombre de piloto. 

Añade una función para añadir al array una sesión de calificación nueva, en caso de que no exista una sesión para ese piloto y en caso de exista, si el tiempo el nuevo tiempo es menor, se modificará el tiempo en la sesión que ya existe en el array  y otra para eliminar del array (hay que comprobar que existe, crea una función para ello).
Crea un archivo para la clase Piloto.

*/
p1 = new Piloto("Antonio","Ferrari")
p2 = new Piloto("Pepe","Toyota")
p3 = new Piloto("Manolo","Peugeot")
s1 = new Sesion(p1,60000)
s1 = new Sesion(p2,70000)
s1 = new Sesion(p3,50000)

let lista = [s1,s2,s3]
var ordenar_tiempo=(lista)=>{
    function compareNumbers(a, b) {
        return a.tiempo - b.tiempo;
    }
    lista.sort(compareNumbers)
}
var ordenar_nombre=(lista)=>{
    lista.sort((a, b) => a.piloto.nombre.localeCompare(b.piloto.nombre));
}