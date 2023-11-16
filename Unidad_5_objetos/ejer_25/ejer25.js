// Crear un objeto Punto con dos coordenadas (x,y) y un método para averiguar el cuadrante en el que está.

class Punto{
    constructor(coordenadax,coordenaday){
        this.x = coordenadax;
        this.y = coordenaday;
    };
    cuadrante(){
        if (this.x > 0 && this.y > 0){
            return 1
        } else if (this.x < 0 && this.y > 0){
            return 2
        } else if (this.x < 0 && this.y < 0){
            return 3
        } else if (this.x > 0 && this.y < 0){
            return 4
        }
        else {
            return "Esta en el eje"
        }
    }
}

// p1 = new Punto(-1,1)
// console.log(p1.cuadrante())

