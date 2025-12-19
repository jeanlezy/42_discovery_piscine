function changeColor() { /* function called changeColor*/
    var r = Math.floor(Math.random() * 256); /* random 0 - 255 */
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    /* junta os valores e aplica aleatorio*/
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

}