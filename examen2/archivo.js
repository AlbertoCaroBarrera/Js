
var alias = /@\w{7}\d{3}/i
var alias2 = /\b\w{7}\d{3}\b/i
var cadenitas = ""
var datos = prompt("Pedir un alias")
var bool = true


while (bool){
    if (alias.test(datos)) {
        //var nuevaVentana = window.open("",'_blank','width=400,height=300');
        document.write(datos.slice(0, 2) + "_" + datos.slice(2,8) + "_" + datos.slice(8,11) + "\n")


    } else if (alias2.test(datos)) {
        datos = "@"+datos
        document.write(datos.slice(0, 2) + "_" + datos.slice(2,8) + "_" + datos.slice(8,11) + "\n")
        
    } else {
        prompt("El alias introducido no es correcto, introducir otro")
    }
    datos = prompt("Pedir otro alias")
    if (datos == "fin"){
        bool = false
    }
    }