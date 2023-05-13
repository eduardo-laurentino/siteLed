function mudaImg(atributo){
    if (atributo == 'img/lampadaoff.png'){
        document.getElementById("lampada").src = 'img/lampadaon.png';
        firebase.database().ref('MeuPrimeiroProjeto/lampada').set('true');
    }else {
        document.getElementById("lampada").src = 'img/lampadaoff.png';
        firebase.database().ref('MeuPrimeiroProjeto/lampada').set('false');
    }
}
var flag = true;
function teste(){
    if (flag == true){
        firebase.database().ref('MeuPrimeiroProjeto/lampada').on('value', snapshot => {let dados = snapshot.val();
            if (dados == 'true'){
                document.getElementById("lampada").src = 'img/lampadaon.png';
            }else {
                document.getElementById("lampada").src = 'img/lampadaoff.png';
            }
        });
        flag = false;
    }
}