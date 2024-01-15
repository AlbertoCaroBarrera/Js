/*
document.getElementById("2").addEventListener('click',alertar,false);
function alertar(){
alert("Te conectaremos con la página: "+this.href);
}
*/

var elementocorrecto = document.getElementById("resultado")

var elementos = document.getElementsByTagName("input")
elementos = [...elementos]
var elemento = elementos.find((elemento)=>elemento.value=2)


//var elemento = document.getElementById("2")

var correcto = () => elementocorrecto.value = "RESPUESTA CORRECTA!"


elemento.addEventListener('click',correcto)
