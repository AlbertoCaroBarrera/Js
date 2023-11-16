// Crear un objeto Rectángulo con un constructor a partir de dos objetos Punto, con métodos para hallar el perímetro del mismo y su área. Añade también dos métodos para calcular la base y la altura del rectángulo a partir de los puntos.

class Rectangulo{
    constructor(puntoA,puntoB){
        this.puntoA = puntoA
        this.puntoB = puntoB
    }
    base(){
        return Math.abs(this.puntoA.x-this.puntoB.x)
    }
    altura(){
        return Math.abs(this.puntoA.y-this.puntoB.y)
    }
    perimetro(){
        return 2*this.base()+2*this.altura()
    }
    area(){
        return this.base()*this.altura()
    }

}
/*
var p1 = new Punto(2,2)
var p2 = new Punto(5,4)
var r1 = new Rectangulo(p1,p2)
console.log(r1.area())*/