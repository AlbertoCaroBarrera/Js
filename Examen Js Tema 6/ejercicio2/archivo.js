window.addEventListener('load', iniciar);

function iniciar() {
    var form = document.getElementById('formulario');
    var datos = document.getElementById('codigoProducto');
    var boton = document.getElementById('boton');

    datos.addEventListener('blur', function () {

        let regex = /^[a-zA-Z]{3}-[0-9]{1,5}$/;
        if (!regex.test(datos.value)) {
            alert('No es valido ese campo');
        } else {
            boton.addEventListener('click', function () {
                const codigo = document.getElementById('codigoProducto').value;
                localStorage.setItem('codigoProducto', codigo);
                form.submit()
            })
        }
    });
    const codigoGuardado = localStorage.getItem('codigoProducto');
    if (codigoGuardado) {
        datos.value = codigoGuardado;
    }

}
