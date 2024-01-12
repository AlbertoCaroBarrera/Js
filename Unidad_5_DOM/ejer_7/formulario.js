// formulario.js

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById("formularioColores");
    var radios = document.getElementsByName("color");
    var btnCambiarColor = document.getElementById("cambiarColorBtn");

    btnCambiarColor.addEventListener('click', function() {
        cambiarColor(radios, form);
    });
});

function cambiarColor(radios, form) {
    var colorSeleccionado = obtenerColorSeleccionado(radios);

    if (colorSeleccionado) {
        form.style.backgroundColor = colorSeleccionado;
    } else {
        alert("Por favor, seleccione un color.");
    }
}

function obtenerColorSeleccionado(radios) {
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            switch (radios[i].id) {
                case "rojo":
                    return "#FF0000";
                case "azul":
                    return "#0000FF";
                case "verde":
                    return "#00FF00";
                case "amarillo":
                    return "#FFFF00";
                case "naranja":
                    return "#FFA500";
                default:
                    return null;
            }
        }
    }
    return null;
}
