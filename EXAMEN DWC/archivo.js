window.addEventListener('load', function () {

    var json = [{
        "clase_pais": "usa", "ciudad_h2": "New York,NY",
        "detalle_precio_total": "1,899", "detalle_num_noches": 7,
        "precio_noche": 275, "ruta_imagen": "./photos/newyork.jpg", "pie_imagen": "Puente Brooklyn"
    },
    {
        "clase_pais": "paris", "ciudad_h2": "Paris,Francia",
        "detalle_precio_total": "1,499", "detalle_num_noches": 5, "precio_noche": 300,
        "ruta_imagen": "./photos/paris.jpg", "pie_imagen": "Notre Dame de Paris"
    },
    {
        "clase_pais": "uk", "ciudad_h2": "Londres,UK",
        "detalle_precio_total": "2,199", "detalle_num_noches": 5,
        "precio_noche": 440, "ruta_imagen": "./photos/london.jpg", "pie_imagen": "Torre de Londres"
    }]

    var elemento = document.getElementById("mostrar")
    var ul = document.createElement("ul")
    ul.style = "display:none"

    for (var i = 0; i < json.length; i++) {
        var li = document.createElement("li")
        li.setAttribute("class", `viaje ${JSON.parse(JSON.stringify(json[i])).clase_pais}`)
        ul.appendChild(li)

        var h2 = document.createElement("h2")
        var txt2 = document.createTextNode(JSON.parse(JSON.stringify(json[i])).ciudad_h2)
        h2.appendChild(txt2)
        li.appendChild(h2)

        var span = document.createElement("span")
        span.setAttribute("class", "detalle")
        var txt3 = document.createTextNode(JSON.parse(JSON.stringify(json[i])).precio_noche + " por " + JSON.parse(JSON.stringify(json[i])).detalle_num_noches + " noches ")
        span.appendChild(txt3)
        li.appendChild(span)

        var boton = document.createElement("button")
        boton.setAttribute("class", "reserva")
        var txt4 = document.createTextNode("Resérvalo ya!")
        boton.appendChild(txt4)
        li.appendChild(boton)

        boton.addEventListener("click",guardardatos)

        var ul2 = document.createElement("ul")
        ul2.setAttribute("class", "fotos")
        var li2 = document.createElement("li")
        var imagen = document.createElement("img")
        imagen.setAttribute("src", JSON.parse(JSON.stringify(json[i])).ruta_imagen)
        var span2 = document.createElement("span")
        var txt5 = document.createTextNode(JSON.parse(JSON.stringify(json[i])).pie_imagen)
        span2.appendChild(txt5)
        li2.appendChild(imagen)
        li2.appendChild(span2)
        li2.addEventListener("mouseover",añadir_clase)
        li2.addEventListener("mouseout",eliminar_clase)
        ul2.appendChild(li2)
        li.appendChild(ul2)


    }
    elemento.insertAdjacentElement("afterend", ul)

    elemento.addEventListener("click", mostrar)
    function mostrar(){
        if (elemento.textContent == "MOSTRAR VIAJES"){
            ul.style = "display:block"
            elemento.textContent="OCULTAR VIAJES"
        } else {
            ul.style = "display:none"
            elemento.textContent= "MOSTRAR VIAJES"
        }
    }
    function añadir_clase(e){
        var elemento = e.currentTarget
        elemento.parentNode.parentNode.children[1].classList.add('destacado');
    }
    function eliminar_clase(e){
        var elemento = e.currentTarget  
        elemento.parentNode.parentNode.children[1].classList.remove('destacado');
    }
    function guardardatos(e){
        let bot = e.currentTarget
        let form = document.createElement("form")
        let input = document.createElement("input")
        input.setAttribute("type","text")
        input.setAttribute("id","nombre")
        form.appendChild(input)
        let buton = document.createElement("input")
        buton.setAttribute("type","button")
        buton.setAttribute("value","Enviar")
        buton.setAttribute("id","boton_final")
        bot.insertAdjacentElement("afterend", buton)
        bot.insertAdjacentElement("afterend", form)

        buton.addEventListener("click",function(){
            if (input.value!==""){
                    localStorage.setItem("nombre", input.value);
                    form.submit();
            }
            })
    }

})

