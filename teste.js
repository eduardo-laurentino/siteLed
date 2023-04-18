
var five = require("johnny-five");
const board = new five.Board();
board.on("ready", () => {
    const led = new five.Led(13);
});


function mudaImg(atributo){
    if (atributo == 'img/lampadaoff.png'){
        document.getElementById("lampada").src = 'img/lampadaon.png';
        led.on();
    }else {
        document.getElementById("lampada").src = 'img/lampadaoff.png';
        led.off();
    }
}