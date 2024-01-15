// Crea un documento que contenga una tabla con al menos 20 filas y 20 columnas (sin copia-pega, usando bucles). Pon texto en las celdas, todo ello mediante DOM.

window.addEventListener('load', function() {
    var tabla = document.createElement('table');

    // Crear filas y columnas en la tabla
    for (var i = 0; i < 20; i++) {
        var fila = document.createElement('tr');
    
        for (var j = 0; j < 20; j++) {
            var celda = document.createElement('td');
            celda.textContent = 'Fila ' + (i + 1) + ', Columna ' + (j + 1);
            fila.appendChild(celda);
        }
    
        tabla.appendChild(fila);
    }
    
    
    document.body.appendChild(tabla);
})


