var img_1 = document.getElementById('img-1');
var img_2 = document.getElementById('img-2');
var img_3 = document.getElementById('img-3');
var img_4 = document.getElementById('img-4');
var img_5 = document.getElementById('img-5');
var img_6 = document.getElementById('img-6');

var card_img = document.getElementById('card-img');
var img = document.getElementById('change')

var tittle = document.getElementById('tittle');

img_1.onclick = function name(params) {
    img.style.marginLeft = '0vw'
    img.src = './Assets/basquete.png'
    tittle.innerHTML = 'Bsquete Ball'
    tittle.style.fontSize = '10vw'
    img.style.marginBottom = '0vh'
    img.style.width = '25vw'
}

img_2.onclick = function name(params) {
    img.style.marginLeft = '0vw'
    img.src = './Assets/fitness.png'
    tittle.innerHTML = 'Pulse Heart'
    tittle.style.fontSize = '10vw'
    img.style.marginBottom = '0vh'
    img.style.width = '25vw'
}

img_3.onclick = function name(params) {
    img.style.marginLeft = '0vw'
    img.src = './Assets/tenis.png'
    tittle.innerHTML = 'tenis'
    tittle.style.fontSize = '10vw'
    img.style.marginBottom = '0vh'
    img.style.width = '25vw'
}

img_4.onclick = function name(params) {
    img.style.marginLeft = '0vw'
    img.src = './Assets/rigbi.png'
    tittle.innerHTML = 'Regbie'
    tittle.style.fontSize = '10vw'
    img.style.marginBottom = '0vh'
    img.style.width = '25vw'
}

img_5.onclick = function name(params) {
    img.style.marginLeft = '0vw'
    img.src = './Assets/footballe.png'
    tittle.innerHTML = 'footballe'
    tittle.style.fontSize = '10vw'
    img.style.marginBottom = '-18vh'
    img.style.width = '25vw'
}

img_6.onclick = function name(params) {
    img.style.marginLeft = '0vw'
    img.src = './Assets/moto.png'
    tittle.innerHTML = 'motor'
    tittle.style.fontSize = '10vw'
    img.style.marginBottom = '0vh'
    img.style.width = '25vw'
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
var img_haja = document.getElementById('img-card-2')

haja_2.onclick = function () {
    var currentValue = parseInt(haja.textContent);
    haja.textContent = currentValue + 1;
    if (haja.textContent == 1) {
        tittle_haja.innerHTML = 'Classement'
        img_haja.src = './Assets/fitnesse-1.png'
    }
    if (haja.textContent == 2) {
        tittle_haja.innerHTML = 'test-2'
        img_haja.src = './Assets/tenis.png'
    }
    if (haja.textContent == 3) {
        tittle_haja.innerHTML = 'test-3'
        img_haja.src = './Assets/basquete.png'
    }
    if (haja.textContent == 8) {
        haja_2.onclick = null;
    }
}

haja_3.onclick = function () {
    var currentValue = parseInt(haja.textContent);
    haja.textContent = currentValue - 1;
    if(haja.textContent == 1){
        haja_3.onclick = null;
    }
    if (haja.textContent == 1) {
        tittle_haja.innerHTML = 'Classement'
        img_haja.src = './Assets/fitnesse-1.png'
    }
    if (haja.textContent == 2) {
        tittle_haja.innerHTML = 'test-2'
        img_haja.src = './Assets/tenis.png'
    }
    if (haja.textContent == 3) {
        tittle_haja.innerHTML = 'test-3'
        img_haja.src = './Assets/basquete.png'
    }
    if (haja.textContent == 8) {
        haja_2.onclick = null;
    }
}

var parti_1 = document.getElementById('scroll-1');
var parti_2 = document.getElementById('scroll-2');

window.onscroll = function () {
        //page-1
        if (scrollY >= 550) {
            //Move-1
            parti_1.style.opacity = '1'
            parti_1.style.transition = '1s'
            parti_1.style.marginLeft = '0vw'
            //Move-2
            parti_2.style.opacity = '1'
            parti_2.style.transition = '1s'
            parti_2.style.marginRight = '0vw'
        }
        else if (scrollY <= 900) {
            //Move-1
            parti_1.style.opacity = '0'
            parti_1.style.marginLeft = '-40vw'
            //Move-2
            parti_2.style.opacity = '0'
            parti_2.style.marginRight = '-40vw'
        }
};


