document.addEventListener("load", function () {

    // Verificar si hay una cookie almacenada
    const nombreCookie = "preferenciasUsuario";
    const preferencias = getCookie(nombreCookie);



    if (preferencias) {
        alert(`¡Hola ${preferencias}! Tenemos una tarifa especial para tu café favorito.`);
    }

    // Función para obtener el valor de una cookie
    function getCookie(nombre) {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(nombre + '=')) {
                return cookie.substring(nombre.length + 1);
            }
        }
        return null;
    }

    // Función para establecer una cookie
    function setCookie(nombre, valor, diasExpiracion) {
        const fechaExpiracion = new Date();
        fechaExpiracion.setDate(fechaExpiracion.getDate() + diasExpiracion);
        const cookie = `${nombre}=${valor}; expires=${fechaExpiracion.toUTCString()}; path=/`;
        document.cookie = cookie;
    }

    // Manejar el envío del formulario
    document.getElementById("coffeeForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtener el nombre del usuario
        const nombreUsuario = document.getElementById("nombre").value;

        // Obtener los tipos de café seleccionados
        const cafesSeleccionados = document.querySelectorAll('input[name="cafe[]"]:checked');
        const tiposCafe = Array.from(cafesSeleccionados).map(checkbox => checkbox.value);

        // Almacenar preferencias del usuario en una cookie
        setCookie(nombreCookie, nombreUsuario, 365);

        // Realizar otras acciones necesarias, por ejemplo, enviar el pedido al servidor

        // Mostrar un mensaje de confirmación al usuario
        alert(`Gracias, ${nombreUsuario}! Tu pedido de ${tiposCafe.join(', ')} será enviado a tu habitación.`);
    });
})
