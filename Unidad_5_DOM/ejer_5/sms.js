window.addEventListener('load', function() {
    var textarea = document.getElementById("mensaje");
    var contador = document.getElementById("contadorCaracteres");

    // Agregar el evento input al área de texto
    textarea.addEventListener('input', function() {
        actualizarContador();
    });

    // Agregar el evento submit al formulario
    document.getElementById("smsForm").addEventListener('submit', function(event) {

        alert("SMS enviado correctamente");
    });

    function actualizarContador() {
        var caracteresRestantes = 145 - textarea.value.length;

        if (caracteresRestantes < 0) {
            textarea.value = textarea.value.substring(0, 145);
            caracteresRestantes = 0;
        }

        contador.textContent = "Caracteres restantes: " + caracteresRestantes;
    }
});
