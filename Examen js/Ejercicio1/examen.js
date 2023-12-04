var c1 = new Cita("Sala1",new Date("12/04/2023 14:44:00"))
var c2 = new Cita("Sala2",new Date("12/21/2023 03:24:00"))
var c3 = new Cita("Sala3",new Date("12/20/2022 03:24:00")) //fecha para que no se pueda poner

var cliente1 = new Cliente("Alberto","Caro Barrera","30203020f",[c1],[])
//cliente1.crear_cita(c2)
//cliente1.crear_cita(c3)
//console.log(cliente1)



cliente1.recordatorioCitas()
//console.log(cliente1)