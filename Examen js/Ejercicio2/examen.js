var i1 = new Integrante("20202020f","Alberto","Caro")
var i2 = new Integrante("21212121w","Antonio","Jimenez")
var i3 = new Integrante("21212122w","Manolo","Perez")
var i4 = new Integrante("21212123w","Maria","Martin")
var b1 = new Banda("Acdc",1992,new Set([i1,i2]),954000000,"Rock")
var b2 = new Banda("Estopa",1991, new Set([i3,i4]) ,944333222,"Pop")


//document.write(b1.mostrarBanda())
//document.write(b2.mostrarBanda())
//document.write(b1.mostrarIntegrantes())
//document.write(b2.mostrarIntegrantes())


var l1 = [b1,b2]
var imprimirListadoBandas = (lista)=>{
    cadena = ""
    lista.forEach(banda => cadena += banda.mostrarBanda() + "<br>");
    document.write(cadena)
}
//imprimirListadoBandas(l1)

var buscarBandaPorNombre = (lista,nombre) => {
    var banda_seleccionada = lista.find((banda)=>banda.nombre == nombre)
    return banda_seleccionada
}

//console.log(buscarBandaPorNombre(l1,"Estopa"))


var ordenarBandasPorAño = (lista) => {
    lista.sort((a,b) => a.año - b.año)
}
//ordenarBandasPorAño(l1)
//console.log(l1)

