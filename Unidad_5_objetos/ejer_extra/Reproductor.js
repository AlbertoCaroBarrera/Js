class Reproductor{
    constructor(canciones=[],volumen=20){
        this.canciones = canciones
        this.volumen = volumen
    }
    mostrarVolumen(){
        return this.volumen
    }
    aumentaVolumen(){
        this.volumen ++
        return this.mostrarVolumen()
    }
    disminuyeVolumen(){
        this.volumen --
        return this.mostrarVolumen()
    }
    añadeCanción(cancion){
        if (this.canciones.includes(cancion) == false){
            this.canciones.push(cancion)
        }
    }
    buscarCancion(cancion){
        if (this.canciones.includes(cancion)){
            let indice = this.canciones.indexOf(cancion)
            return indice
        }
    }
    eliminaCanción(cancion){
        if (this.canciones.includes(cancion)){
            let indice = this.buscarCancion(cancion)
            this.canciones.splice(indice,1)
        }
    }
    mostrarLista(){
        var cadena = ""
        for (let cancion of this.canciones){
            cadena += cancion.mostrarCancion()
        }
        return cadena
    }
    ordenarCancionDesc(){
        this.canciones.sort((a,b)=>a.titulo.localeCompare(b.titulo))
    }

}
