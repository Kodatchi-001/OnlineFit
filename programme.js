var img_1 = document.getElementById('img-1');
var img_2 = document.getElementById('img-2');
var img_3 = document.getElementById('img-3');
var img_4 = document.getElementById('img-4');
var img_5 = document.getElementById('img-5');
var img_6 = document.getElementById('img-6');

var card_img = document.getElementById('card-img');
var img = document.getElementById('change');

var tittle = document.getElementById('tittle');
var para = document.getElementById('para');

img_1.onclick = function name(params) {
    img.style.marginLeft = '0vw'
    img.src = './Assets/basquete.png'
    tittle.innerHTML = 'Basket ball'
    tittle.style.fontSize = '10vw'
    img.style.marginBottom = '0vh'
    img.style.width = '25vw'
    para.innerHTML = ' Basketball is a fast-paced sport played between two teams of five players each, aiming to score points by shooting the ball through the opponents hoop.'
}

img_2.onclick = function name(params) {
    img.style.marginLeft = '0vw'
    img.src = './Assets/fitness.png'
    tittle.innerHTML = 'Fitness'
    tittle.style.fontSize = '10vw'
    img.style.marginBottom = '0vh'
    img.style.width = '25vw'
    para.innerHTML = 'Fitness is a holistic approach to physical well-being that encompasses exercise, nutrition, and overall health. It involves engaging in regular physical activity to improve cardiovascular health, strength, flexibility, and endurance.'
}

img_3.onclick = function name(params) {
    img.style.marginLeft = '0vw'
    img.src = './Assets/tenis.png'
    tittle.innerHTML = 'Tennis'
    tittle.style.fontSize = '10vw'
    img.style.marginBottom = '0vh'
    img.style.width = '25vw'
    para.innerHTML = 'Tennis is a racket sport played individually or in pairs, where players use rackets to hit a ball over a net into the opponents court. The objective is to score points by making it difficult .'
}

img_4.onclick = function name(params) {
    img.style.marginLeft = '0vw'
    img.src = './Assets/rigbi.png'
    tittle.innerHTML = 'Rugby'
    tittle.style.fontSize = '10vw'
    img.style.marginBottom = '0vh'
    img.style.width = '25vw'
    para.innerHTML = 'Rugby is a full-contact team sport played with an oval-shaped ball. It is typically played by two teams of 15 players each, although variations such as rugby sevens involve fewer players. The objective of the game is to score points by carrying'
}

img_5.onclick = function name(params) {
    img.style.marginLeft = '0vw'
    img.src = './Assets/footballe.png'
    tittle.innerHTML = 'Football'
    tittle.style.fontSize = '9vw'
    img.style.marginBottom = '-18vh'
    img.style.width = '25vw'
    para.innerHTML = 'Football, also known as soccer in some regions, is a team sport played between two teams of eleven players each. The objective of the game is to score goals by kicking a ball into the opponents goal'
}

img_6.onclick = function name(params) {
    img.style.marginLeft = '0vw'
    img.src = './Assets/moto.png'
    tittle.innerHTML = 'Motor Racing'
    tittle.style.fontSize = '10vw'
    img.style.marginBottom = '0vh'
    img.style.width = '25vw'
    para.innerHTML = 'Motor racing, often referred to simply as "racing," is a competitive sport involving vehicles propelled by internal combustion engines or electric motors. Participants, known as drivers'
}

var scrolle = document.getElementById('scrol');
var scrolle_2 = document.getElementById('scrol-2');
var scroll_left = document.getElementById('scrol-left');
var scroll_right = document.getElementById('scrol-right');

scroll_left.onclick = function name(params) {
    scrolle.style.transform = 'translateX(-100%)'
    scrolle_2.style.transform = 'translateX(-100%)'
}
scroll_right.onclick = function name(params) {
    scrolle.style.transform = 'translateX(0%)'
    scrolle_2.style.transform = 'translateX(0%)'
}

var haja = document.getElementById("plus")
var haja_2 = document.getElementById("plus-num")
var haja_3 = document.getElementById("moin-num")
var tittle_haja = document.getElementById('tittle-card-2')
var para_haja = document.getElementById('para-2')

haja_2.onclick = function () {
    var currentValue = parseInt(haja.textContent);
    haja.textContent = currentValue + 1;
    if (haja.textContent == 1) {
        tittle_haja.innerHTML = 'fitness'
    }
    else if (haja.textContent == 2) {
        tittle_haja.innerHTML = 'Basketball'
        para_haja.innerHTML = 'Highly popular internationally, especially in the United States, where it originated. It has also gained significant traction in countries like China'
    }
     else if (haja.textContent == 3) {
        tittle_haja.innerHTML = 'Tennis'
        para_haja.innerHTML = 'A globally watched and played sport, with major tournaments such as Wimbledon, the US Open, and the Australian Open attracting millions of viewers.'
    }
     else if (haja.textContent == 4) {
        tittle_haja.innerHTML = 'Fitness'
        para_haja.innerHTML = 'A globally watched and played sport, with major tournaments such as Wimbledon, the US Open, and the Australian Open attracting millions of viewers.'
    }
     else if (haja.textContent == 5) {
        tittle_haja.innerHTML = 'Fitness'
        para_haja.innerHTML = 'A globally watched and played sport, with major tournaments such as Wimbledon, the US Open, and the Australian Open attracting millions of viewers.'
    }
    else if (haja.textContent == 6) {
        tittle_haja.innerHTML = 'Fitness'
        para_haja.innerHTML = 'A globally watched and played sport, with major tournaments such as Wimbledon, the US Open, and the Australian Open attracting millions of viewers.'
    }
    else if (haja.textContent == 7) {
        tittle_haja.innerHTML = 'Fitness'
        para_haja.innerHTML = 'A globally watched and played sport, with major tournaments such as Wimbledon, the US Open, and the Australian Open attracting millions of viewers.'
    }
    else if (haja.textContent <= 8) {
        tittle_haja.innerHTML = 'Fitness'
        para_haja.innerHTML = 'A globally watched and played sport, with major tournaments such as Wimbledon, the US Open, and the Australian Open attracting millions of viewers.'
        haja_2.onclick = null;
    }
}

haja_3.onclick = function () {
    var currentValue = parseInt(haja.textContent);
    haja.textContent = currentValue - 1;

    if (haja.textContent == 1) {
         haja_3.onclick = null;
    }
    else if (haja.textContent == 2) {
        tittle_haja.innerHTML = 'Basketball'
        para_haja.innerHTML = 'Highly popular internationally, especially in the United States, where it originated. It has also gained significant traction in countries like China'
    }
     else if (haja.textContent == 3) {
        tittle_haja.innerHTML = 'Tennis'
        para_haja.innerHTML = 'A globally watched and played sport, with major tournaments such as Wimbledon, the US Open, and the Australian Open attracting millions of viewers.'
    }
     else if (haja.textContent == 4) {
        tittle_haja.innerHTML = 'Fitness'
        para_haja.innerHTML = 'A globally watched and played sport, with major tournaments such as Wimbledon, the US Open, and the Australian Open attracting millions of viewers.'
    }
     else if (haja.textContent == 5) {
        tittle_haja.innerHTML = 'Fitness'
        para_haja.innerHTML = 'A globally watched and played sport, with major tournaments such as Wimbledon, the US Open, and the Australian Open attracting millions of viewers.'
    }
    else if (haja.textContent == 6) {
        tittle_haja.innerHTML = 'Fitness'
        para_haja.innerHTML = 'A globally watched and played sport, with major tournaments such as Wimbledon, the US Open, and the Australian Open attracting millions of viewers.'
    }
    else if (haja.textContent == 7) {
        tittle_haja.innerHTML = 'Fitness'
        para_haja.innerHTML = 'A globally watched and played sport, with major tournaments such as Wimbledon, the US Open, and the Australian Open attracting millions of viewers.'
    }
    else if (haja.textContent == 8) {
        tittle_haja.innerHTML = 'Fitness'
        para_haja.innerHTML = 'A globally watched and played sport, with major tournaments such as Wimbledon, the US Open, and the Australian Open attracting millions of viewers.'
    }
}

var parti_1 = document.getElementById('scroll-1');
var parti_2 = document.getElementById('scroll-2');
var parti_3 = document.getElementById("scroll-3")
var page_2 = document.getElementById('scroll-img')
var page_2_tittle = document.getElementById('tittle-page-2')
var page_2_para = document.getElementById('para-page-2')
window.onscroll = function () {
    //page-2
    if (scrollY >= 1390) {
        //Move-1
        page_2.style.transition = '1s'
        page_2.style.marginBottom = '-12vh'
        //Move-2
        page_2_tittle.style.transition = '1s'
        page_2_tittle.style.marginTop = '0vh'
        //Move-3
        page_2_para.style.transition = '1s'
        page_2_para.style.marginTop = '0vh'
    }
    else if (scrollY <= 1200) {
        //Move-1
        page_2.style.marginBottom = '-40vh'
        //Move-2
        page_2_tittle.style.marginTop = '-90vh'
        //Move-3
        page_2_para.style.marginTop = '-90vh'
    }
};


