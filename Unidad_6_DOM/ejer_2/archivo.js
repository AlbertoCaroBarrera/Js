window.addEventListener("load", function(){

    let elemento = document.getElementById("testdiv")

    elemento.innerHTML = '<p>Este es el <em>contenido</em> de mi párrafo. </p>'

    /* Ejercicio 1. Crea un nodo p asignado a una variable llamada para. */

    let para = document.createElement("p")

    /*b Crea un nodo de texto asignado a una variable llamada txt1. */

    let txt1 = document.createTextNode("Este es el contenido del nodo de texto.")
    
    /*Añade txt1 (Este es el) a para.*/
    
    para.appendChild(txt1)

    /* Crea un nodo em asignado a una variable llamada enfasis. */

    let enfasis =  document.createElement("em")

    /**Crea un nodo de texto asignado a una variable llamada txt2 (contenido). */

    let txt2 = document.createTextNode("Este es el contenido")

    /** Añade txt2 a enfasis. */

    enfasis.appendChild(txt2)

    /**Añade enfasis a para. */

    para.appendChild(enfasis)

    /* Crea un nodo de texto asignado a una variable llamada txt3. */

    let txt3 = document.createTextNode("Nodo de texto tercero")

    /* Añade txt3 a para (de mi párrafo). */

    para.appendChild(txt3)

    /* Añade para al elemento testdiv del documento. */

    testdiv.append(para)

});

