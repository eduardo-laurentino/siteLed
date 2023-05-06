var five = require("johnny-five");
var firebase = require("firebase");

var board = new five.Board();

board.on("ready", function(){
    var led = new five.Led(13);

    this.repl.inject({led: led});

    var config = {
        apiKey: "",
        authDomain: "lampada-f83c6-default-rtdb.firebaseapp.com",
        databaseURL: "",
        storageBucket: "lampada-f83c6-default-rtdb.appspot.com",
      };
      firebase.initializeApp(config);

      var starCountRef = firebase.database().ref('lampada').on('value', function(snapshot){
        let lampada = snapshot.val();
        if(lampada == 'on'){
            led.on();
        }else{
            led.off();
        }
      });
})
