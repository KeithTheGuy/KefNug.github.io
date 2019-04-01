var cursor = document.createElement("div");
cursor.className = "cursor";

var red = 255;
var green = 0;
var blue = 0;

var rainbowCycle = window.setInterval(rainbowCycle, 1);

document.onmousemove = function() {
    cursor.style.left = event.clientX;
    cursor.style.top = event.clientY;
    cursorUpdate();

    var cursorTrail = document.createElement("div");
    cursorTrail.className = "cursorTrail";
    cursorTrail.style.left = event.clientX;
    cursorTrail.style.top = event.clientY;
    cursorTrail.style.setProperty("--blue", blue);
    cursorTrail.style.setProperty("--green", green);
    cursorTrail.style.setProperty("--randomX", Math.floor(Math.random() * 129)-64 + "px");
    cursorTrail.style.setProperty("--red", red);

    document.body.appendChild(cursorTrail);
    setTimeout(function(){document.body.removeChild(cursorTrail);}, 800);
};

function rainbowCycle() {
    if(blue==0&&red>=1&&red<=255){if(green==255){red--;}else{green++;}}else if(green>=1&&green<=255){if(blue==255){green--;}else{blue++;}}else if(blue>=1&&blue<=255){if(red==255){blue--;}else{red++;}}
    cursorUpdate();
}

function cursorUpdate() {
    cursor.style.setProperty("--red", red);
    cursor.style.setProperty("--green", green);
    cursor.style.setProperty("--blue", blue);
    document.body.appendChild(cursor);
}
