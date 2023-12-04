class Banda{
    constructor(nombre,año,conjunto,telefono,estilo){
        this.nombre = nombre;
        this.año = año;
        this.conjunto = conjunto;
        this.telefono = telefono;
        this.estilo = estilo;
    }
    mostrarBanda(){
        let cadena = ""

        
        cadena += "Nombre de la Banda: " + this.nombre + " Año de fundacion: " + this.año  + " Telefono: " + this.telefono + " Estilo de la banda: " + this.estilo
        return cadena
    }
    mostrarIntegrantes(){
        let cadena_integrantes = ""
        let lista = [...this.conjunto]
        lista.forEach(integrante => cadena_integrantes+=integrante.Mostrar());
        return " Integrantes: " + cadena_integrantes
    }
}