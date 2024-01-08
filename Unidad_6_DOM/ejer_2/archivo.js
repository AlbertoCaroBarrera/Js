window.addEventListener("load", function(){

    let elemento = document.getElementById("testdiv")

    elemento.innerHTML = '<p>Este es el <em>contenido</em> de mi párrafo. </p>'

    /* Ejercicio 1. Crea un nodo p asignado a una variable llamada para. */

    let para = document.createElement("p")

    /* Crea un nodo de texto asignado a una variable llamada txt1. */

    let txt1 = document.createTextNode("Este es el contenido del nodo de texto.")

    para.appendChild(txt1)


    elemento.appendChild(para)
});

