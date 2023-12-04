class Cliente{
    constructor(nombre,apellidos,dni,citas_pendientes,historial_citas){
        this.nombre = nombre
        this.apellidos = apellidos
        this.dni = dni
        this.citas_pendientes = citas_pendientes
        this.historial_citas = historial_citas
    }
    crear_cita(cita){
        var fechaActual = new Date()
        if (cita.fecha > fechaActual){
            if (this.citas_pendientes.find(c => c.fecha == cita.fecha) == undefined){
                this.citas_pendientes.push(cita)
            }
        }
    }
    recordatorioCitas(){
        var fechaActual = new Date()
        var numeros = 3; //repeticiones de la alerta

        var citas_ordenadas = this.citas_pendientes.sort((a,b)=>a.fecha - b.fecha)
        var ProximaCita = citas_ordenadas[0]
        var indice = this.citas_pendientes.indexOf(ProximaCita)

        if (ProximaCita.fecha < fechaActual){
            this.historial_citas.push(ProximaCita) // introducimos la cita al historial
            this.citas_pendientes.splice(indice,1) // borramos la cita de pendientes
            let id = setInterval(() => {
                alert(`La cita ha empezado: ${ProximaCita.fecha} en la sala ${ProximaCita.sala} `)
                numeros--;
                if (numeros <= 0) {
                    clearInterval(id);
                }
            }, 60000); //cada minuto saltara la alarma
        }
    }
}