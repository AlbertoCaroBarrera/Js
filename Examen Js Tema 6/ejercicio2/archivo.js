window.addEventListener('load', iniciar);

function iniciar() {
    var datos = document.getElementById('codigoProducto');

    datos.addEventListener('blur', function () {

        let regex = /^[a-zA-Z]{3}-[0-9]{1,5}$/;
        if (regex.test(datos.value)==false) {
            alert('No es valido ese campo');
        }
        
        const codigoInput = document.getElementById('codigoProducto');
        const codigo = codigoInput.value;
        localStorage.setItem('codigoProducto', codigo);

        const codigoGuardado = localStorage.getItem('codigoProducto');
        if (codigoGuardado) {
            document.getElementById('codigoProducto').value = codigoGuardado;
        }

    });

}
