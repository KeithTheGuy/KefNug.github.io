function setHeight() {
    var centerHeight;
    var contentHeight;
    setInterval(function(){
        centerHeight = (window.innerHeight - document.getElementById("center").offsetTop + 192) + "px";
        document.getElementById("center").style.height = centerHeight;
        
        contentHeight = document.getElementById("content").offsetHeight + "px";
        document.getElementById("home").style.height = contentHeight;
        document.getElementById("references").style.height = contentHeight;
    }, 100);
}