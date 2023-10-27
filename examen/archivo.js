var Entrega;
var Recepcion;
var Stock=30;

valor = prompt("a) Entrega de cuadernos \n b) Recepcion de cuadernos \n c) Salir");

while (valor != "c"){

    if (valor === "a") {

        Entrega = prompt("Introduce la cantidad de cuadernos a entregar");

        Stock -= Entrega;

        while (Stock<=10){

            Recepcion = prompt("Introduzca una cantidad de cuadernos para hacer un pedido")

            Stock += Recepcion;

        }
        
    } else if (valor === "b") {

        Recepcion = prompt("Realice un pedido");
        Stock += Recepcion;

    }

    valor = prompt("a) Entrega de cuadernos \n b) Recepcion de cuadernos \n c) Salir");

}

