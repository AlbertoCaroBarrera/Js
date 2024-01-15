
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
