function animatedTitle() {     
    var animatedTitle = ["ZYP-------","-ZYP------","--ZYP-----","---ZYP----","----ZYP---","-----ZYP--","------ZYP-","-------ZYP","P-------ZY","YP-------Z"];
    var i = 0;    
    setInterval(function(){
        setInterval(function(){
            document.title = animatedTitle[i];
            i++
            if(i > 9){i = 0;}
        }, 1000);
    }, 10000);
}
function setContentHeight() {     
    setInterval(function(){
        var divHeight = (window.innerHeight) - (document.getElementById("center").offsetTop) + 256;
        var contentHeight = divHeight - 128;

        document.getElementById("center").style.height = divHeight;
        document.getElementById("content").style.height = contentHeight;
    }, 100);
}
