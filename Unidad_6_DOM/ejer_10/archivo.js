window.addEventListener("load", function () {
    var mi_div = document.getElementsByTagName("div")
    for (d of mi_div){
        d.addEventListener("mouseover",position)
    }
    var mi_body = document.getElementById("body")
    var p = document.createElement("p")
    mi_body.appendChild(p)
    function position(event) {
        
        
        var x = event.clientX;

        var y = event.clientY;
        p.innerHTML='X coords: ' + x + ', Y coords: ' + y
        
    }

})