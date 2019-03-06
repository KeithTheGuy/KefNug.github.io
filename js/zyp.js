function animatedTitle() {     
    var animatedTitle = ["Zyp","zYp","zyP"];
    var i = 0;    
    setInterval(function(){
        setInterval(function(){
            document.title = animatedTitle[i];
            i++;
            if(i >= 2){i = 0;}
        }, 512);
    }, 1536);
}
function setContentHeight() {     
    setInterval(function(){
        var divHeight = (window.innerHeight) - (document.getElementById("center").offsetTop) + 256;
        var contentHeight = divHeight - 128;

        document.getElementById("center").style.height = divHeight;
        document.getElementById("content").style.height = contentHeight;
    }, 100);
}
