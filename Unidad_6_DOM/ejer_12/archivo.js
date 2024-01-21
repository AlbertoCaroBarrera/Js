window.addEventListener("load",function(){
    document.addEventListener("mousemove", function(event) {
        var elementoASeguir = document.getElementById("elemento-a-seguir");
        var mouseX = event.clientX;
        var mouseY = event.clientY;

        elementoASeguir.style.left = mouseX + "px";
        elementoASeguir.style.top = mouseY + "px";
    });
    
})