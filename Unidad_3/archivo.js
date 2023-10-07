// Leer de teclado una serie de nombres hasta que aparezca la palabra "ULTIMO". Contar cuántos nombres se han leído, cuántos comienzan C y cuántos contienen la ñ.
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

//Con expresiones regulares, leer desde teclado una cadena con una serie de nombres. Contar cuántos nombres se han leído, cuántos comienzan C.
/*
let nombres = "Maria Carlos Juan Pedro Antonio Carmen"

expRg = /\bC\w*\b/g

console.log(nombres.match(expRg).length)
*/

//Leer un texto de la entrada estándar y contar cuántas palabras tiene, cuántas de ellas empiezan por A. Suponemos que una palabra está separada de otra por uno o más espacios, un tabulador y el texto acaba con un punto, no existe ningún punto y aparte y las palabras son todas correctas.
/*
var texto = "Esto es un texto donde tenemos Algo Nada Mucho Ambar    Alberto Amarillo nada de nada Adios."

expRg1 = /\bA\w*\b/g
expRg2 = /\b\w+\b/g

console.log("palabras que tenemos",texto.match(expRg2).length)

console.log("empiezan por A",texto.match(expRg1).length)
*/

// Pedimos una cadena de texto que sabemos que puede contener paréntesis. Realiza un script que extraiga la cadena que se encuentra entre los paréntesis. Ejemplo: Si escribimos el texto “Hola (que) tal” se mostrará “que”. Si no existe el signo “(“ mostrará una cadena vacía y si existe el signo  “(“pero no el signo “)” mostrará desde el primer paréntesis hasta el final.
/*
expRg == /\(\w\)/g    // NO ES DEL TODO CORRECTO
var texto = "Esto es mi texto (de prueba) y aqui (vamos) a terminar (adios)"
console.log(texto.match(expRg))
*/

// Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
/*
var texto = "hola que tal";
var texto2 = ""
for (var i=texto.length-1; i>=0; i--){
    texto2 += texto[i]

}
console.log(texto2)
*/

// Hacer un programa en el que el usuario introduzca, nombre, profesión y edad separado por comas. Después el programa debe mostrar la edad del usuario por pantalla.
/*
var datos = prompt("Introduce tu nombre, profesión y edad ")
var expRg = /\d/g
edad = datos.match(expRg).join("")
console.log(edad)
*/

//Diseñar un script que lea una dirección de email y la valide. No se terminará hasta introducir una dirección correcta. Modificar el ejercicio anterior para una vez validado el correo mostrar el usuario y el servidor de correo en dos mensajes.

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

// Realizar un programa que compruebe si una palabra es palíndromo, es decir, si se lee igual de izquierda a derecha que de derecha a izquierda. Por ejemplo: RADAR, ARA....
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

// Realiza un supertrim de una cadena, eliminando todos los espacios duplicados.
/*
cadena = "Hola  esto es un a caddena con espacioos "
expRG = /\w+/g
console.log(cadena.match(expRG).join(""))
*/

// Diseña un programa que indique el carácter más repetido dentro de una cadena de caracteres.
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

//Realiza un programa que compruebe mediante expresiones regulares si un usuario ha introducido una matrícula de vehículo válida. Si el usuario añade la matrícula correctamente, formatea la cadena para que todas sean guardadas (imagina que luego se guardarán en una BBDD) de la misma forma, en mayúsculas y con un guión entre letras y números, por ejemplo: ABC-1234.
/*
var matricula = "AbC-1234 abv-123 ab-1234";
var expReg = /[a-zA-Z]{3}-[0-9][0-9][0-9][0-9]/g

console.log(matricula.match(expReg).join("").toUpperCase());
*/
// Diseña un programa que valide un código postal español, debe tener 5 números y el código postal «más alto» debería ser 52999. Es decir, no existe un código postal en España que empiece por 53 o superior.

/*
var codigoPostal = "40009";

if (codigoPostal <= 52999 & codigoPostal >=0 & codigoPostal.length == 5) {
    console.log(codigoPostal,"Es un codigo postal valido");
} else {
    console.log(codigoPostal,"No es un codigo postal valido");
}

*/

// Valida con una expresión regular el horario de formato de 24 hrs, por ejemplo 14:45 o 08:12.
/* Falta pulirla
horario = "22:45"
expReg = /([2][0-3]|[0-1][0-9]):[0-5][0-9]/
if (expReg.test(horario)){
    console.log(true)
} else {
    console.log(false)
}
*/

// Los números pueden tener entre 1 y 3 dígitos. Solicita el ingreso de la cordenada de un punto. El formato a ingresar por teclado es (999,999)

// Mismo problema que el anterior