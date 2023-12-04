class Banda{
    constructor(nombre,año,lista,telefono,estilo){
        this.nombre = nombre;
        this.año = año;
        this.lista = lista;
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
        this.lista.forEach(integrante => cadena_integrantes+=integrante.Mostrar());
        return " Integrantes: " + cadena_integrantes
    }
}