window.addEventListener('load', function(){

    var listaCoches = document.getElementsByTagName('li');
    for (var i = 0; i < listaCoches.length; i++) {
        listaCoches[i].style.listStyleType = 'square';
    }

    // Agregar al final
    var listaCoches = document.getElementById('listaCoches');
    var nuevoElementoFinal = document.createElement('li');
    nuevoElementoFinal.textContent = "modelo final";
    nuevoElementoFinal.style.listStyleType = 'square'; 
    listaCoches.appendChild(nuevoElementoFinal);

    // Agregar en posición intermedia (por ejemplo, después del segundo elemento)
    var segundoElemento = listaCoches.children[1];
    var nuevoElementoIntermedio = document.createElement('li');
    nuevoElementoIntermedio.textContent = "modelo intermedio";
    nuevoElementoIntermedio.style.listStyleType = 'square';  
    listaCoches.insertBefore(nuevoElementoIntermedio, segundoElemento.nextSibling);


    // Encontrar el elemento "BMW"
    var elementoBMW = Array.from(listaCoches.children).find(function(elemento) {
        return elemento.textContent.includes('BMW');
    });

    if (elementoBMW) {
        // Agregar antes del elemento BMW
        var nuevoElementoAntesBMW = document.createElement('li');
        nuevoElementoAntesBMW.textContent = 'modelo (Antes de BMW)';
        nuevoElementoAntesBMW.style.listStyleType = 'square';
        listaCoches.insertBefore(nuevoElementoAntesBMW, elementoBMW);

        // Agregar después del elemento BMW
        var nuevoElementoDespuesBMW = document.createElement('li');
        nuevoElementoDespuesBMW.textContent = 'modelo (Después de BMW)';
        nuevoElementoDespuesBMW.style.listStyleType = 'square';
        listaCoches.insertBefore(nuevoElementoDespuesBMW, elementoBMW.nextSibling);
    } else {
        console.error('Elemento "BMW" no encontrado en la lista.');
    }

});

