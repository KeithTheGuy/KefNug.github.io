function setContentHeight() {
    setInterval(function(){
        document.getElementById("center").style.height = (window.innerHeight - document.getElementById("center").offsetTop + 192) + "px";
        document.getElementById("content").style.height = (window.innerHeight - document.getElementById("content").offsetTop - 192) + "px";
    }, 100);
}