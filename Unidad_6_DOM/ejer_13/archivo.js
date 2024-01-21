window.addEventListener("load", function () {
    var elementoArrastrable = document.getElementById("arrastrable");

    elementoArrastrable.addEventListener("dragstart", function(event) {
        event.dataTransfer.setData("text/plain", ""); // necesario para que funcione en Firefox
    });

    var contenedorDestino = document.getElementById("contenedor-destino");

    contenedorDestino.addEventListener("dragover", function(event) {
        event.preventDefault();
    });

    contenedorDestino.addEventListener("drop", function(event) {
        event.preventDefault();
        var elementoArrastrado = document.getElementById("arrastrable");
        contenedorDestino.appendChild(elementoArrastrado);
        elementoArrastrado.style.left = "0";
        elementoArrastrado.style.top = "0";
    });

})