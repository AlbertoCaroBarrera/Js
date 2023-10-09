//1 Leer de teclado una serie de nombres hasta que aparezca la palabra "ULTIMO". Contar cuántos nombres se han leído, cuántos comienzan C y cuántos contienen la ñ.
/*
var expresionRegular = /\bC\w*\b/g;

var expresionRegular2 = /\b\w*(ñ|Ñ)\w*\b/g;

nombres = "Carlos Juan Mañana Historia Caña Maña"

nombresconC = expresionRegular.exec(nombres);

nombres2 = nombres.match(expresionRegular)

console.log(nombresconC);
console.log(nombres2);

nombresconÑ = nombres.match(expresionRegular2);

console.log(nombresconÑ)
*/

//2 Con expresiones regulares, leer desde teclado una cadena con una serie de nombres. Contar cuántos nombres se han leído, cuántos comienzan C.
/*
let nombres = "Maria Carlos Juan Pedro Antonio Carmen"

expRg = /\bC\w*\b/g

console.log(nombres.match(expRg).length)
*/

//3 Leer un texto de la entrada estándar y contar cuántas palabras tiene, cuántas de ellas empiezan por A. Suponemos que una palabra está separada de otra por uno o más espacios, un tabulador y el texto acaba con un punto, no existe ningún punto y aparte y las palabras son todas correctas.
/*
var texto = "Esto es un texto donde tenemos Algo Nada Mucho Ambar    Alberto Amarillo nada de nada Adios."

expRg1 = /\bA\w*\b/g
expRg2 = /\b\w+\b/g

console.log("palabras que tenemos",texto.match(expRg2).length)

console.log("empiezan por A",texto.match(expRg1).length)
*/

//4 Pedimos una cadena de texto que sabemos que puede contener paréntesis. Realiza un script que extraiga la cadena que se encuentra entre los paréntesis. Ejemplo: Si escribimos el texto “Hola (que) tal” se mostrará “que”. Si no existe el signo “(“ mostrará una cadena vacía y si existe el signo  “(“pero no el signo “)” mostrará desde el primer paréntesis hasta el final.
/*
expRg == /\(\w\)/g    // NO ES DEL TODO CORRECTO
var texto = "Esto es mi texto (de prueba) y aqui (vamos) a terminar (adios)"
console.log(texto.match(expRg))
*/

//5 Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
/*
var texto = "hola que tal";
var texto2 = ""
for (var i=texto.length-1; i>=0; i--){
    texto2 += texto[i]

}
console.log(texto2)
*/

//6 Hacer un programa en el que el usuario introduzca, nombre, profesión y edad separado por comas. Después el programa debe mostrar la edad del usuario por pantalla.
/*
var datos = prompt("Introduce tu nombre, profesión y edad ")
var expRg = /\d/g
edad = datos.match(expRg).join("")
console.log(edad)
*/

//7 Diseñar un script que lea una dirección de email y la valide. No se terminará hasta introducir una dirección correcta. Modificar el ejercicio anterior para una vez validado el correo mostrar el usuario y el servidor de correo en dos mensajes.

/*
var email = "Alea@gmail.com"
var expRg = /\w+@\w+\.\w+/g
var usuario = /\w+@/g
var contraseña = /@\w+\./g
if (email.match(expRg).includes(email)) {
    console.log(email.match(usuario)[0].slice(0,-1))
    console.log(email.match(contraseña)[0].slice(1,-1))
}
*/

//8 Realizar un programa que compruebe si una palabra es palíndromo, es decir, si se lee igual de izquierda a derecha que de derecha a izquierda. Por ejemplo: RADAR, ARA....
/*
var texto = "RADAR";
var texto2 = ""
for (var i=texto.length-1; i>=0; i--){
    texto2 += texto[i]

}
if (texto == texto2){
    console.log("Es Palindromo")
}
*/

//9 Realiza un supertrim de una cadena, eliminando todos los espacios duplicados.
/*
cadena = "Hola  esto es un a caddena con espacioos "
expRG = /\w+/g
console.log(cadena.match(expRG).join(""))
*/

//10 Diseña un programa que indique el carácter más repetido dentro de una cadena de caracteres.
/*
var cadena = "Hola esto es una cadena de caracteres";
var caracterMasRepetido = '';
var maxRepeticiones = 0;

for (var i = 0; i < cadena.length; i++) {
    var caracterActual = cadena[i];
    var repeticiones = 0;

    for (var j = 0; j < cadena.length; j++) {
        if (cadena[j] === caracterActual) {
        repeticiones++;
        }
    }

    if (repeticiones > maxRepeticiones) {
        maxRepeticiones = repeticiones;
        caracterMasRepetido = caracterActual;
        }
    }

console.log("El carácter más repetido es '" + caracterMasRepetido + "' con " + maxRepeticiones + " repeticiones.");
*/

//12 matrícula correctamente, formatea la cadena para que todas sean guardadas (imagina que luego se guardarán en una BBDD) de la misma forma, en mayúsculas y con un guión entre letras y números, por ejemplo: ABC-1234.
/*
var matricula = "Abc1234";
var expReg = /^[a-z]{3}[0-9]{4}$/gi
if (expReg.exec(matricula)){
    matricula = matricula.toUpperCase();
}
var matriculaValida = matricula.slice(0,3)+"-"+matricula.slice(3);
console.log(matriculaValida)
*/

//13 Diseña un programa que valide un código postal español, debe tener 5 números y el código postal «más alto» debería ser 52999. Es decir, no existe un código postal en España que empiece por 53 o superior.

/*
var codigoPostal = "40009";

if (codigoPostal <= 52999 & codigoPostal >=0 & codigoPostal.length == 5) {
    console.log(codigoPostal,"Es un codigo postal valido");
} else {
    console.log(codigoPostal,"No es un codigo postal valido");
}

*/

//14 Valida con una expresión regular el horario de formato de 24 hrs, por ejemplo 14:45 o 08:12.
/*
horario = "23:59"
expReg = /\b([2][0-3]|[0-1][0-9]):[0-5][0-9]\b/
if (expReg.test(horario)){
    console.log(true)
} else {
    console.log(false)
}
*/

//15 Los números pueden tener entre 1 y 3 dígitos. Solicita el ingreso de la cordenada de un punto. El formato a ingresar por teclado es (999,999)

var punto = "(999,706)";

expReg = /\(([1-9]?[1-9]?[0-9]|[1-9][0][0-9]),([1-9]?[1-9]?[0-9]|[1-9][0][0-9])\)/g

if (expReg.test(punto)){
    console.log(true)
} else {
    console.log(false)
}

// Hacer un programa que muestre un menú de opciones con las siguientes operaciones posibles:
/*
Redondeo a su inmediato superior de un número
Redondeo a su inmediato inferior de un número
Redondeo al número más cercano
Cálculo del número máximo entre dos dados
Cálculo del número mínimo entre dos dados
Cálculo de un número elevado a otro
Cálculo de la raíz cuadrada de un número
*/
/*
var numero = 10.5523;
var eleccion=7;
//prompt("1)Redondeo a su inmediato superior de un número \n2)Redondeo a su inmediato inferior de un número \n3)Redondeo al número más cercano \n4)Cálculo del número máximo entre dos dados \n5)Cálculo del número mínimo entre dos dados \n6)Cálculo de un número elevado a otro \n7)Cálculo de la raíz cuadrada de un número")
if (eleccion==1){
    console.log(Math.ceil(numero))
} else if (eleccion==2){
    console.log(Math.ceil(numero)-1)
} else if (eleccion==3){
    console.log(Math.round(numero))
} else if (eleccion==4){
    console.log(Math.max(Math.ceil(Math.random()*6),Math.ceil(Math.random()*6)))
} else if (eleccion==5){
    console.log(Math.min(Math.ceil(Math.random()*6),Math.ceil(Math.random()*6)))
} else if (eleccion==6){
    console.log(Math.exp(numero,numero))
} else if (eleccion==7){
    console.log(Math.sqrt(numero))
}
*/

// Un proyectil disparado a un ángulo ​A tiene un alcance horizontal ​R dado por la siguiente expresión:
//R = (2*(v**2)SenAcosA)/G
//Siendo ​V la velocidad inicial y ​G = 9,8 m/seg. Calcúlese el alcance limitando los ángulos de 0 a 90 y ​V a valores positivos.
/*
var velocidad = 10;
var angulo = 45;
const gravedad = 9.8;
var alcance = (2*Math.pow(velocidad,2)*Math.sin(angulo)*Math.cos(angulo))/gravedad
if (velocidad>0 & angulo>0 & angulo<90){
    console.log(alcance)
}
*/
// Escribir un subprograma que produzca una tabla de valores de la ecuación:
// Y = 2e**2-0.5tsen(0.5t)
//Donde ​t varía entre 0 y 60. El valor del incremento de ​t será introducido como parámetro de entrada.
/*
var valort=2;
var ecuacion = 2*Math.pow(Math.E,2) - 0.5* valort * Math.sin(0.5*valort)
console.log(ecuacion)
*/

// Generar aleatoriamente una quiniela de n columnas. Supóngase que las probabilidades son:
/*
➔ 50% para que salga 1
➔ 30% para que salga x
➔ 20% para que salga 2
*/

var columnas = 9;
var lista = new Array();
while (columnas > 0) { 
    var aleatorio = Math.ceil((Math.random()*10));
    if (aleatorio>0 & aleatorio<=5) {
        lista.push(1);
    }
    else if (aleatorio>5 & aleatorio<=8){
        lista.push("x");
    }else if (aleatorio>8 & aleatorio<=10){
        lista.push(2);
    }
    columnas --;
}
console.log(lista)


// Generar aleatoriamente una primitiva de n columnas.
