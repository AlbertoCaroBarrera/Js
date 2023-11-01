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

