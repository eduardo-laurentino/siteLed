
var five = require("johnny-five");
const board = new five.Board();
board.on("ready", () => {
    const led = new five.Led(13);
});


function mudaImg(atributo){
    if (atributo == 'img/lampadaoff.png'){
        document.getElementById("lampada").src = 'img/lampadaon.png';
        firebase.database().ref('lampada').set('off');
    }else {
        document.getElementById("lampada").src = 'img/lampadaoff.png';
        firebase.database().ref('lampada').set('on');
    }
}