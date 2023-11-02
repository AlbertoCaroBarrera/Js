// Implementar funciones para el ejercicio anterior para imprimir los datos y para buscar una persona por apellidos, por DNI o por edad. ¿cómo podríamos optimizar la búsqueda? 

//pedirdatos();

var imprimir = (lista)=>{
    for (i of lista){
        if (typeof i === 'object'){
            imprimir(i)
        }else if (typeof i !== 'object'){
            document.write(i+'<br>')
        }
    }
}



var buscar_persona_apellidos = (apellidos,matriz) => matriz.find((persona)=>persona[1]==apellidos)
    


var buscar_persona_dni = (dni,matriz) => matriz.find((persona)=>persona[2]==dni)
    

var buscar_persona_edad = (edad,matriz) => {
    const fecha = Date.parse(new Date());
    return matriz.find((persona)=>((Date.parse(persona[3])-fecha)/(1000*60*60*24*365))==edad)
    
}

//imprimir(buscar_persona_edad(29,pedirdatos()))

function calcular_edad(cadena){
    const fecha = Date.parse(new Date());
    return Math.floor((fecha - Date.parse(cadena))/(1000*60*60*24*365))
}

console.log(calcular_edad("05-02-1994"))