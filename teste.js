function ligaled(){
    var five = require("johnny-five");
    const board = new five.Board();
    board.on("ready", () => {
        const led = new five.Led(13);
        led.on();
      });
}


function mudaImg(atributo){
    if (atributo == 'img/lampadaoff.png'){
        document.getElementById("lampada").src = 'img/lampadaon.png';
        ligaled();
    }else {
        document.getElementById("lampada").src = 'img/lampadaoff.png';
    }
}