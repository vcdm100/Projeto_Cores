var corpo = document.getElementById ("corpo");

var cores = ["SlateBlue", "MediumBlue", "SkyBlue", "LightSlateGray", "Aquamarine", "DarkGreen", "Goldenrod", "Chocolate"];

var i = 0;

setInterval (() => {
    corpo.style.backgroundColor = cores [i];
    i++;
    if (i == 8) i = 0;
}, 1000);