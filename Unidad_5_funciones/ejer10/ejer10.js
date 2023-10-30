// Refactoriza el siguiente código usando funciones flecha.
// Asegúrate de que la función se llama tripleAndFilter.

var tripleAndFilter = (arr) => 
    arr.map(
        (value)=>value*3
    ).filter(
        (value)=>value%5===0
    )


console.log(tripleAndFilter([10,13,15,20]))

// Asegúrate de que la función se llama doubleOddNumbers.

var doubleOddNumbers = (arr) => 
        arr.filter(
            (val)=>val%2!==0
        ).map(
            (val)=>val*2
        )

console.log(doubleOddNumbers([1,2,3,4,10,20]))

// Asegúrate de que la función se llama bar

var bar = (...arg)=> {
    let txt='';
    for(let i in arg){
        txt += arg[i];
    }
    return txt;
}

console.log(bar("hola","mundo"))

// d.Observando los ejemplos anteriores, repite el ejercicio 9.d, utilizando la programación funcional

var sumaArgPares = (...lista)=> lista.filter((val)=>val%2==0).map((val)=>val*2);

console.log(sumaArgPares(1,2,3,4,5,6))

//  Dada una cadena leída por teclado, realizar un programa que extraiga los números que aparecen en dicha secuencia e imprima por pantalla dichos números y su suma. 

var extraeNum = (cadena) => {
    var suma = 0;
    var lista = []
    for (var x=0;x<cadena.length;x++){
        lista.push(cadena[x])
    }

    lista = lista.map((val)=>parseInt(val))

    console.log(lista)

    for (valor of lista){
        if (typeof valor=='number'){
            suma += valor
        }
    }

    return suma
}

console.log(extraeNum("a2a3jdjgfh9"))