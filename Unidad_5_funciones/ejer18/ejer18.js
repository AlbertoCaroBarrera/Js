/*
Resolver el problema del cambio (devolución mínima de monedas y billetes) utilizando arrays, evitando la duplicidad de estructuras de control alternativo. 

*/
// correcto?
billetes = [500,200,100,50,20,10,5]
monedas = [2,1,0.5,0.2,0.1,0.05,0.02,0.01]

var devolver = (cantidad)=>{
    var total = cantidad;
    for (let i of billetes){
        if (total >= i){
            console.log('billetes de ' + i + ': ' + (Math.floor(total/i)));
            total = total%i;
        }
    }
    for (let i of monedas){
        if (total >= i){
            console.log('monedas de ' + i + ': ' + (Math.floor(total/i)));
            total = total%i;
        }
    }
}

devolver(1281)