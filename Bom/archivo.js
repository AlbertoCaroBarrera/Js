//Crear un programa que va a crear un reloj digital en el título. Utilice el método setInterval() para actualizar el título de la página una vez cada minuto con la hora actual.


function actualizarReloj() {
    const fechaActual = new Date();
    const hora = fechaActual.getHours().toString().padStart(2, '0');
    const minutos = fechaActual.getMinutes().toString().padStart(2, '0');
    const segundos = fechaActual.getSeconds().toString().padStart(2, '0');
    document.title = `${hora}:${minutos}:${segundos}`;
    } 

setInterval(actualizarReloj, 1000);

/*
Crea una página web que realice las siguientes funciones desde la página principal. Crea botones para cada realizar cada una de las siguientes opciones:
	- Abrir ventana flotante
	- Abrir ventana flotante y detenerla
	- Cerrar ventana flotante
	- Dar foco a la ventana flotante
	- Quitar foco ventana nueva
	- Scroll absoluto (0, 1000)
	- Scroll relativo (0, 10)
*/

