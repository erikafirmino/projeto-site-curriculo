
let menu = document.querySelector('#menu')

function clickMenu(){
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
}

function dataAtual(){
    let msg = document.getElementById('msg');
    let data = new Date();
    let hora = data.getHours();

    if(hora >= 0 && hora < 12){
        msg.innerHTML = `Agora são ${hora} horas. Bom Dia!`
    } else if(hora >= 12 && hora < 18) {
        msg.innerHTML = `Agora são ${hora} horas. Boa Tarde!`;
    }else{
        msg.innerHTML = `Agora são ${hora} horas. Boa Noite!`;
    }
}