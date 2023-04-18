function mudaImg(atributo){
    firebase.database().ref('lampada').set('off');
    if (atributo == 'img/lampadaoff.png'){
        document.getElementById("lampada").src = 'img/lampadaon.png';
        firebase.database().ref('lampada').set('on');
    }else {
        document.getElementById("lampada").src = 'img/lampadaoff.png';
        firebase.database().ref('lampada').set('off');
    }
}