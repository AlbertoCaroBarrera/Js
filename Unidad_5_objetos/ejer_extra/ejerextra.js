/*
Implementa mediante objetos en ES6 y utilizando archivos js externos (uno para cada clase) el siguiente problema.

Deberás crear un reproductor de música como objeto, que tendrá dos propiedades un array de objetos “canciones” y un volumen que por defecto será 20. 

El objeto Cancion, debe tener dos propiedades: título e interprete. Además del constructor tendrá un método mostrarCancion().

Además el objeto Reproductor tendrá los siguientes métodos:
aumentaVolumen(): subirá el volumen en un punto y devolverá el nuevo valor del volumen.
disminuyeVolumen(): bajará el volumen en un punto y devolverá el nuevo valor del volumen.
añadeCanción (cancion,interprete): si no existe la añadirá al array. 
eliminaCanción (cancion,interprete): buscará en el array si la canción existe y si existe la eliminará del array.
mostrarLista(): mostrará la lista de canciones junto con su interprete que se van a reproducir, de la siguiente forma:
A Perfect Day – Lou Reed
Uprising – Muse 
Por una cabeza – Carlos Gardel
...
mostrarVolumen()
buscarCancion(cancion,interprete): buscará una canción y devolverá su posición en el array
ordenarCancionDesc(): que ordenará la lista de canciones por el título de canción de manera descendente


En el archivo html realiza una prueba donde se compruebe el funcionamiento del objeto reproductor y sus métodos. La lista de canciones-interpretes inicial será pedida por pantalla separadas por coma (A Perfect Day, Lou Reed) (Por una cabeza,Carlos Gardel) y se parará cuando se introduzca la palabra “salir”.
*/

//c1 = new Cancion("Por una cabeza","Carlos Gardel")
//c2 = new Cancion("A Perfect Day","Lou Reed")
//c3 = new Cancion("Titulo cancion","Interprete cancion")

//r = new Reproductor([c1,c2])


var lista = []
c = ""
while (c!="salir")
    c = prompt("Introduce un titulo y su interprete, por ejemplo: (A Perfect Day, Lou Reed),(Por una cabeza,Carlos Gardel)")
    lista.push(c)
var r = new Reproductor(lista)


document.write("Volumen inicial: "+r.mostrarVolumen()+"<br>")
document.write("Volumen cambiado:" +r.aumentaVolumen()+"<br>")
document.write("Volumen cambiado:" +r.disminuyeVolumen()+"<br>")
document.write("Canciones: " + "<br>" +r.mostrarLista()+"<br>")
r.añadeCanción(c3)
document.write("Canciones: " + "<br>" +r.mostrarLista()+"<br>")
document.write(r.buscarCancion(c3) + "<br>")

r.eliminaCanción(c3)
document.write("Canciones: " + "<br>" +r.mostrarLista()+"<br>")
r.ordenarCancionDesc()
document.write("Canciones: " + "<br>" +r.mostrarLista()+"<br>")


