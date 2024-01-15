document.addEventListener('DOMContentLoaded', function() {
    var formulario = document.getElementById("formularioNombre");

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe realmente

        if (validarFormulario()) {
            formulario.submit(); // Enviar el formulario si la validación es exitosa
        }
    });
});

function validarFormulario() {
    var nombreInput = document.getElementById("nombre");
    var nombre = nombreInput.value.trim();

    // Verificar si el campo de nombre está vacío
    if (nombre === "") {
        alert("Por favor, ingrese su nombre en mayúsculas.");
        return false;
    }

    // Verificar si el nombre está en mayúsculas
    if (!/^[A-Z]+$/.test(nombre)) {
        alert("Ingrese solo letras mayúsculas en el nombre.");
        return false;
    }

    // Si la validación es exitosa, el formulario se enviará
    return true;
}