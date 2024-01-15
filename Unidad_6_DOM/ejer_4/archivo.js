//Modifica la siguiente función JavaScript e inclúyela dentro de un fichero .js, de manera que no use innerHTML, es decir, crea los nodos elementos y textos necesarios y añádelos a un HTML. 

window.addEventListener('load', get_fortune)

function get_fortune() {
    var hoy = new Date();
    var dichos = [
        "Carpe Diem.",
        "El silencio es oro, pero la cinta aislante es plata.",
        "Una manzana al día, mantiene al doctor en la lejanía.",
        "A cada uno lo suyo.",
        "Si a la primera no lo consigues, inténtalo de nuevo.",
        "No te conformes con la mediocridad, pelea por el éxito",
        "Vive y deja vivir."
    ];

    var n = dichos.length;
    var numero = Math.floor(Math.random() * n);
    var dicho = "Hoy es: " + hoy + ".\n\nHoy la suerte te dice:\n\n\"" + dichos[numero] + "\"";

    // Crear elementos
    var divDicho = document.getElementById('divdicho');
    
    // Limpiar contenido existente
    while (divDicho.firstChild) {
        divDicho.removeChild(divDicho.firstChild);
    }

    // Crear nodos de texto y elementos
    var dichoNode = document.createTextNode(dicho);
    var em = document.createElement('em');
    var emText = document.createTextNode(dichos[numero]);

    // Construir la estructura de nodos
    divDicho.appendChild(dichoNode);
    em.appendChild(emText);
    divDicho.appendChild(em);
}
