/* 

Añade al ejercicio anterior las siguientes funciones, utiliza además las funciones creadas anteriormente (utiliza los métodos ya implementados de Array y funciones flecha):
mayorEdad: filtrará del array los usuarios mayores de edad e imprimirá sus datos en una nueva ventana.
menorEdad: filtrará del array los usuarios menores de edad e imprimirá en una nueva ventana los días y/o años que le quedan para su mayoría de edad.
modificaDatos: solicitará qué datos modificar, el dato por el que se va a modificar y el dni del usuario.
eliminaUsuario: elimina un usuario del array solicitando su dni. Además solicita confirmación antes de eliminar. 


*/

var mayorEdad = (matriz) => {
    for (fila of matriz){
        if (calcular_edad(fila[fila.length -1]) >= 18){
            imprimir(fila)
        }
    }
}

// mayorEdad(pedirdatos())

function calcular_siguiente_cumple(cadena){
    const anio_nac = new Date(cadena).getFullYear();
    const mes_nac = new Date(cadena).getMonth();
    const dia_nac = new Date(cadena).getDate();
    const fecha = Date.parse(new Date());
    const cumple_siguiente = Date.parse(new Date(anio_nac+18,mes_nac,dia_nac));
    const diasTotales = (cumple_siguiente - fecha  )/(1000*60*60*24);
    const anios = Math.floor(diasTotales/365);
    const dias = Math.floor(diasTotales%365);
    return [anios,dias]
}

// console.log(calcular_siguiente_cumple("05-02-2010"))

var menorEdad = (matriz) => {
    for (fila of matriz){
        if (calcular_edad(fila[fila.length -1]) < 18){
            imprimir(fila)
            imprimir(["años que faltan:",calcular_siguiente_cumple(fila[fila.length -1])[0],"dias que faltan:",calcular_siguiente_cumple(fila[fila.length -1])[1],"<br>"]);
        }
    }
}

// menorEdad(pedirdatos())

var modificaDatos = (tipo_dato,dato,dni,matriz) => {
    var lista_persona = buscar_persona_dni(dni,matriz);
    
    for (var i = 0; i <matriz.length; i++) {
        if (matriz[i]==lista_persona) {
            var indice_persona_matriz=i;
        }
    }

    if (tipo_dato=="nombre"){
        matriz[indice_persona_matriz][0] = dato;
    } else if (tipo_dato=="apellidos"){
        matriz[indice_persona_matriz][1] = dato;
    } else if (tipo_dato=="dni"){
        matriz[indice_persona_matriz][2] = dato;
    } else if (tipo_dato=="fecha"){
        matriz[indice_persona_matriz][3] = dato;
    } else {
        return "tipo de dato incorrecto"
    }

    return matriz
}

// imprimir(modificaDatos("nombre","antonio","30303030F",pedirdatos()))

var eliminaUsuario = (dni,matriz)=> {
    var lista_persona = buscar_persona_dni(dni,matriz);
    
    for (var i = 0; i <matriz.length; i++) {
        if (matriz[i]==lista_persona) {
            var indice_persona_matriz=i;
        }
    }
    var variable = prompt(`Opciones: \n 1) Borrar el usuario cuyo dni es ${dni}. \n 2) Cancelar el borrado de usuario.`)
    if (variable == 1){
        matriz.splice(indice_persona_matriz,1);
    }
    return matriz

}

// imprimir(eliminaUsuario("30303030F",pedirdatos()))

// para la modificacion y eliminacion creo que no es necesario devolver la matriz, pero lo hago para comprobar que sale bien