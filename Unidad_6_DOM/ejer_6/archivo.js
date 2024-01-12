// Usa DOM para crear dinámicamente un enlace link y pon sus atributos. Usa DOM para coger los atributos y mostrar su valor en un Div creado al efecto.

window.addEventListener('load', function(){
    var enlace = document.createElement('a');
    enlace.href = 'https://www.ejemplo.com';
    enlace.textContent = 'Enlace de Ejemplo';
    enlace.target = '_blank';
    document.body.appendChild(enlace);
    var divAtributos = document.createElement('div');
    divAtributos.textContent = 'Atributos del Enlace: ';
    for (var atributo in enlace.attributes) {
        divAtributos.textContent += atributo + ': ' + enlace.getAttribute(atributo) + '; ';
    }
    document.body.appendChild(divAtributos);
});