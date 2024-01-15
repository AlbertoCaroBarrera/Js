
function inicializar(){
    document.getElementById("abrirVentana").onclick=abrirVentana;
    
}

let ventanaFlotante;

function abrirVentana() {
    var elementos = document.getElementsByTagName("input")
    //var elemento = document.getElementById("nombre")
    ventanaFlotante = window.open("","", 'width=400,height=300');
    for (let el of elementos){
        ventanaFlotante.document.write(el.value.toUpperCase() + "<br>")
    }
}

// ejercicio 3

function calcularedad() {
    var fechanac = new Date(document.getElementById("fecha").value)
    var fechaActual = new Date()
    var edad_calculada = (fechaActual-fechanac)/(1000*60*60*24*365.25)
    var edad = document.getElementById("edad")
    edad.value = edad_calculada
    console.log("ha salido")
}





window.addEventListener('load', () => {

    console.log('hola');
    document.getElementById('enviar').addEventListener('click',()=>{
        console.log('chao');
        var nombre = document.getElementById('nombre').value.toUpperCase();
        var apellidos = document.getElementById('apellidos').value.toUpperCase();
        var usuario = document.getElementById('usuario').value.toUpperCase();
        var contrasena = document.getElementById('contrasena').value;
        var diaNac = parseInt(document.getElementById('diaNac').value); // Cambiado a 'diaNac'
        var mesNac = document.getElementById('mesNac').value; // Nuevo campo de mes
        var anioNac = parseInt(document.getElementById('anioNac').value); // Nuevo campo de año
        var sexo = document.getElementById('sexo').value.toUpperCase();
        var movil = document.getElementById('numeroMovil').value;
        var correo = document.getElementById('correo').value.toUpperCase();


        //Vamos a calcular la edad del usuario:/*  */
        var mes = {
            'enero': 0,
            'febrero': 1,
            'marzo': 2,
            'abril': 3,
            'mayo': 4,
            'junio': 5,
            'julio': 6,
            'agosto': 7,
            'septiembre': 8,
            'octubre': 9,
            'noviembre': 10,
            'diciembre': 11
        };
        let mesNacInt = mes.mesNac;

        let fechaNac = new Date(anioNac,mesNacInt ,diaNac);
        var fechaActual = new Date();
        var edad = fechaActual.getMilliseconds() - fechaNac.getMilliseconds();
        

        document.getElementById('edadUsuario').value = edad;
        console.log(edad);
        // Construir el resultado en mayúsculas
        var resultado = "Nombre: " + nombre + "<br>" +
        "Apellidos: " + apellidos + "<br>" +
        "Nombre de Usuario: " + usuario + "<br>" +
        "Contraseña: " + contrasena + "<br>" +
        "Fecha de Nacimiento: " + diaNac + "/" + mesNac.toUpperCase() + "/" + anioNac + "<br>" +
        "Sexo: " + sexo + "<br>" +
        "Teléfono Móvil: " + movil + "<br>" +
        "Correo Electrónico: " + correo + '<br>'+
        'LA EDAD ES: ' + edad + fechaActual +fechaNac ;

// Mostrar el resultado en el div resultado
//document.getElementById('resultado').innerHTML = resultado;


});

    });