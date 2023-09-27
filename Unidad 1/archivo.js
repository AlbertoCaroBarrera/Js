/*
console.log(isNaN("3"*5));
document.write("Hola mundo");
// Calcular el área y el volumen de la esfera cuyo radio se pide al usuario.
//let radio = prompt("Ingrese el radio de la esfera");;
let radio = 5;
let area = Math.PI * (radio * radio);
console.log("area",area);
let volumen = 4/3 * Math.PI * (radio ** 2);
console.log("volumen",volumen);

// Diseñar un algoritmo para hallar el valor absoluto de un número leído de teclado y presentarlo en pantalla.

let numero = -5;
let absoluto;
if (numero < 0) {
    absoluto = (-1)*(numero);
} else {
    absoluto = numero;
}

console.log("valor absoluto del numero",absoluto);
// Realiza un algoritmo que lea un dato de teclado y calcule e imprima su inverso. Considere el caso especial del valor 0 mostrando el mensaje de error correspondiente.

let n = 5;
let inverso;
if (n == 0) {
    console.log("El valor no puede ser cero");
} else {
     inverso= 1 / n;
}

console.log("el valor del inverso es",inverso)

// Escriba un algoritmo que lea un instante de tiempo dado en horas y minutos y escriba como respuesta los mensajes “Buenos días” “Buenas tardes” “Buenas noches”, de acuerdo con las siguientes reglas:
//a. Es de día desde las 7:30 hasta las 14:00 horas.
//b. Es tarde desde las 14:01 hasta las horas 20:30.
//c. Es noche desde las 20:31 hasta las horas 7:29.

let horario = "07:32"

if (horario > "07:30" & horario < "14:00"){
    console.log("Buenos dias")
} else if (horario > "14:01" & horario < "20:30"){
    console.log("Buenas tardes")
} else {
    console.log("Buenas noches")
}

/*
Para comprobar si un año es o no bisiesto se usa la siguiente regla: “Un año es bisiesto si es divisible por 400, o bien es divisible por 4 pero no por 100”. Diseñar un programa que utilizando una variable lógica que tenga valor cierto si el año es bisiesto y falso si no lo es.
*/
/*
let anho = 2003;
if (anho%400 == 0 | (anho%4==0 & anho%100!=0)){
    console.log(true);
} else {
    console.log(false);
}

/*
Diseñar un algoritmo que tomando las coordenadas cartesianas de un punto en el plano y calcule e imprima el cuadrante al que pertenece dicho punto. También debe detectar cuando está en el origen o sobre un eje.
*/
/*
let x = 1;
let y = 2;

if (x>0 & y >0) {
    console.log("Esta en el primer cuadrante");
} else if (x<0 & y>0){
    console.log("Esta en el segundo cuadrante");
} else if (x<0 & y<0){
    console.log("Esta en el tercer cuadrante");
} else if (x>0 & y <0){
    console.log("Esta en el cuarto cuadrado");
} else {
    console.log("Esta en el eje de coordenadas");
}

/*
Diseñar un algoritmo para escribir en pantalla los n primeros números naturales, sus cuadrados, sus cubos y la suma de todos ellos.
*/
/*
let valor = 5;
let suma = 0;
while (valor != 0){

    console.log(valor);
    console.log(valor**2);
    console.log(valor**3);
    suma += valor;
    console.log(suma);
    valor --;
}
*/
// Hallar el menor, el mayor y la media de un conjunto de números positivos leídos de teclado.
/*
let variable;
variable =parseInt(prompt("Introduce un numero"));
let mayor = variable;
let menor = variable;
while (!isNaN(variable)){
    
    variable = parseInt(prompt("Introduce un numero"));
        
    if (isNaN(variable)){
        console.log("mayor",mayor," menor",menor);
    }
        
    else {

            if (variable > mayor){
                    mayor=variable
            }
            if (variable < menor){
                    menor=variable
            }
            }
}

*/
// Realizar un programa que proporcione el cambio de Euros a Dólares, Libras, Yenes, Franco Suizo, Corona Noruega, según opción. El programa debe controlar todas las entradas y ofrecer al usuario la posibilidad de repetir o salir.
/*
let valor;
let moneda;
valor = parseInt(prompt("Cantidad de euros"))
moneda = prompt("Moneda de cambio")
switch(moneda){

    case "Dolares":
        console.log(valor*1.05653);
        break;
    case "Libras":
        console.log(valor*0.86947);
        break;
    case "Yenes":
        console.log(valor*157.5255);
        break;
    case "Franco Suizo":
        console.log(valor*0.96887);
        break;
    case "Corona Noruega":
        console.log(valor*11.42);
        break;
    default:
        console.log("No existe la moneda")

}
*/

// Realizar un algoritmo que permita introducir la nota de una asignatura por teclado, la valide para que esté comprendida entre 0 y 10 y se escriba en letras de la siguiente manera:

/*
let nota = parseFloat(prompt("Introduce tu nota"))

if (nota < 5){
        console.log("Suspenso");
}
else if (nota >= 5 & nota <6){
    console.log("Aprobado");
}
else if (nota >= 6 & nota <7){
        console.log("Bien");
}
else if (nota >= 7 & nota <9){
        console.log("Notable");
}
else if (nota >= 9 & nota <=10){
        console.log("Sobresaliente");
}
else{
        console.log("Nota no valida");
}
*/

// Realizar un programa que lea una fecha de nacimiento de la forma día, mes, año, y dé como resultado el número de Tarot. El programa verificará si la fecha es correcta. El número de Tarot se calcula sumando los números de la fecha de nacimiento y reduciéndolos a un único dígito. Por ejemplo, si su fecha de nacimiento es 20 de julio de 1984, el número de Tarot sería: 20 + 7+ 1984 = 2011⇒ 2 + 0 + 1 + 1 = 4


/*
let dia=5;
let mes=2;
let año=1994;

let tarot=0;

let numero = dia + mes + año;
let cadena = numero.toString();

for (var i=0; i<4;i++){
    tarot = tarot + parseInt(cadena[i]);

} 
console.log(tarot)

*/

// Estamos interesados en calcular los ingresos medios de un conjunto de hombres y mujeres. Para ello disponemos de un documento donde se recoge si se trata de un hombre (H) o una mujer (M) y su sueldo correspondiente. La entrada de datos termina cuando se lee un * como sexo. Se validarán todas las entradas, el sexo será H o M y el sueldo entre los 1000 y 2000 euros independientemente de que el trabajador sea hombre o mujer.
/*
let sexo;
let sueldo;
let valor=0;
let i=0;

while (sexo != "*"){
    
    sexo = prompt("Introduzca su sexo");
    
    if (sexo !="*"){

        sueldo = parseFloat(prompt("Introduzca su sueldo"));

        if (sueldo>=1000 & sueldo <=2000){
            valor += sueldo;
            i++
        }
    }
}
media = valor/i

console.log("La media es: " ,media)
*/

// Diseñar un programa que, dada una cierta cantidad de dinero que se leerá desde la entrada estándar, calcule cuál es el número mínimo de monedas de curso legal que equivalen a dicha cantidad de dinero.

let cantidad=304.2;
let monedadoble;
let monedasimple;
let moneda50=0;
let moneda20=0;
let moneda10=0;
let moneda5=0;
let moneda2=0;
let moneda1=0;

monedadoble= parseInt(parseInt(cantidad)/2)
monedasimple=parseInt(cantidad)%2
cantidad=cantidad-Math.floor(cantidad)
if (cantidad>=0.50){
    moneda50++
    cantidad -= 0.5
}
while (cantidad>=0.2){
    moneda20 ++
    cantidad -= 0.2
}
while (cantidad>=0.1){
    moneda10 ++
    cantidad -= 0.1
}
while (cantidad>=0.05){
    moneda5 ++
    cantidad -= 0.05
}
while (cantidad>=0.02){
    moneda2 ++
    cantidad -= 0.02
}
moneda1 = cantidad

console.log("monedas de 2 euros: ",monedadoble,"\nmonedas de 1 euro: ",monedasimple,"\nmonedas de 50 centimos",moneda50,"\nmoneda 20 centimos:",moneda20,"\nmoneda de 10 centimos: ", moneda10,"\nmoneda 5 centimos: ",moneda5,"\nmoneda 2 centimos",moneda2,"\nmoneda 1 centimo")
