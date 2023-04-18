var firebase = require("firebase");

var config = {
  apiKey: "syegr4w2LKqRVWOmIi8V1m6XFyNIgJYxSHL85DpX",
  authDomain: "lampada-f83c6-default-rtdb.firebaseapp.com",
  databaseURL: "https://lampada-f83c6-default-rtdb.firebaseio.com/",
  storageBucket: "lampada-f83c6-default-rtdb.appspot.com",
};
firebase.initializeApp(config);

function mudaImg(atributo){
    if (atributo == 'img/lampadaoff.png'){
        document.getElementById("lampada").src = 'img/lampadaon.png';
        firebase.database().ref('lampada').set('on');
    }else {
        document.getElementById("lampada").src = 'img/lampadaoff.png';
        firebase.database().ref('lampada').set('off');
    }
}