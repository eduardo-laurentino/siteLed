var five = require("johnny-five");

const board = new five.Board();


function ligaled(){
    board.on("ready", () => {
        const led = new five.Led(13);
        led.on();
      });
}


function mudaImg(atributo){
    if (atributo == 'img/lampadaoff.png'){
        document.getElementById("lampada").src = 'img/lampadaon.png';
    }else {
        document.getElementById("lampada").src = 'img/lampadaoff.png';
    }
}