window.addEventListener("load", inicializar)

function inicializar() {
    var json = [
        { src: "/img/img1.jpg", desc: "descripcion1", specs: ["spec11", "spec12"] },
        { src: "/img/img2.jpg", desc: "descripcion2", specs: ["spec21", "spec22"] },
        { src: "/img/img3.jpg", desc: "descripcion3", specs: ["spec31", "spec32"] }
    ]

    let primer_div = document.getElementById("todos-los-viajes")
    let primer_h1 = document.createElement("h1")
    let txt1 = document.createTextNode("Subtituloo")
    primer_h1.appendChild(txt1)
    primer_div.appendChild(primer_h1)

    var primer_ul = document.createElement("ul")
    for (obj of json) {
        let li = document.createElement("li")
        let img = document.createElement("img")
        img.setAttribute('src',obj.src)
        let p = document.createElement("p")
        let txt2 = document.createTextNode(obj.desc)
        p.appendChild(txt2)
        li.appendChild(img)
        li.appendChild(p)
        var ul = document.createElement("ul")
        ul.classList.add("specs")
        for (var spec of obj.specs) {
            let li2 = document.createElement("li")
            let txt3 = document.createTextNode(spec)
            li2.appendChild(txt3)
            ul.appendChild(li2)
        }
        li.appendChild(ul)
        primer_ul.appendChild(li)
    }
    primer_div.appendChild(primer_ul)

    document.getElementsByTagName("img").addEventListener("click",ocultar)

    function ocultar(e){
        console.log(e.currentTarjet)


    }

}
