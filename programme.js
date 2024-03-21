var img_1 = document.getElementById('img-1');
var img_2 = document.getElementById('img-2');
var img_3 = document.getElementById('img-3');
var img_4 = document.getElementById('img-4');
var img_5 = document.getElementById('img-5');
var img_6 = document.getElementById('img-6');

var card_img = document.getElementById('card-img');
var img_haja = document.getElementById('change');

var tittle = document.getElementById('tittle');
var para = document.getElementById('para');

img_1.onclick = function name(params) {
    img.style.marginLeft = '0vw'
    img_haja.src = './Assets/basquete.png'
    img_haja.style.width = '25vw'
    img_haja.style.marginLeft = '0vw'
    tittle.innerHTML = 'Basket ball'
    tittle.style.fontSize = '10vw'
    para.innerHTML = ' Basketball is a fast-paced sport played between two teams of five players each, aiming to score points by shooting the ball through the opponents hoop.'
}

img_2.onclick = function name(params) {
    img.style.marginLeft = '0vw'
    img_haja.src = './Assets/fitness.png'
    img_haja.style.width = '25vw'
    img_haja.style.marginLeft = '0vw'
    tittle.innerHTML = 'Fitness'
    tittle.style.fontSize = '10vw'
    para.innerHTML = 'Fitness is a holistic approach to physical well-being that encompasses exercise, nutrition, and overall health. It involves engaging in regular physical activity to improve cardiovascular health, strength, flexibility, and endurance.'
}

img_3.onclick = function name(params) {
    img.style.marginLeft = '0vw'
    img_haja.src = './Assets/tenis.png'
    img_haja.style.width = '25vw'
    img_haja.style.marginLeft = '0vw'
    img_haja.style.marginLeft = '0vw'
    tittle.innerHTML = 'Tennis'
    tittle.style.fontSize = '10vw'
    para.innerHTML = 'Tennis is a racket sport played individually or in pairs, where players use rackets to hit a ball over a net into the opponents court. The objective is to score points by making it difficult .'
}

img_4.onclick = function name(params) {
    img.style.marginLeft = '0vw'
    img_haja.src = './Assets/rigbi.png'
    img_haja.style.width = '25vw'
    img_haja.style.marginLeft = '0vw'
    tittle.innerHTML = 'Rugby'
    tittle.style.fontSize = '10vw'
    para.innerHTML = 'Rugby is a full-contact team sport played with an oval-shaped ball. It is typically played by two teams of 15 players each, although variations such as rugby sevens involve fewer players. The objective of the game is to score points by carrying'
}

img_5.onclick = function name(params) {
    img.style.marginLeft = '0vw'
    img_haja.src = './Assets/footballe.png'
    img_haja.style.width = '18vw'
    img_haja.style.marginLeft = '0vw'
    tittle.innerHTML = 'Football'
    tittle.style.fontSize = '9vw'
    para.innerHTML = 'Football, also known as soccer in some regions, is a team sport played between two teams of eleven players each. The objective of the game is to score goals by kicking a ball into the opponents goal'
}

img_6.onclick = function name(params) {
    img.style.marginLeft = '0vw'
    img_haja.src = './Assets/moto.png'
    tittle.innerHTML = 'Motor Racing'
    tittle.style.fontSize = '10vw'
    img_haja.style.marginLeft = '0vw'
    img.style.marginBottom = '0vh'
    img.style.width = '30vw'
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

var haja = document.getElementById("content")
var haja_2 = document.getElementById("plus-num")
var haja_3 = document.getElementById("moin-num")

var para_2 = document.getElementById('para-2');
var info_1 = document.getElementById('inf-1');
var info_2 = document.getElementById('inf-2');

var najma_1 = document.getElementById('najma-1');
var najma_2 = document.getElementById('najma-2');
var najma_3 = document.getElementById('najma-3');
var najma_4 = document.getElementById('najma-4');
var najma_5 = document.getElementById('najma-5');

haja_2.onclick = function () {
    let currentValue = parseInt(haja.textContent);
    haja.textContent = currentValue + 1;
    if (haja.textContent == 1) {
        info_1.innerHTML = 'Thomas Martin'
        info_2.innerHTML = 'Freelancer'
        para_2.innerHTML = 'I find online fitness sites offer great flexibility for working out at any time that suits my busy schedule. Some even have specific programs for busy individuals like me, which is really convenient.'
        najma_1.style.color = 'orange'
        najma_2.style.color = 'orange'
        najma_3.style.color = 'orange'
        najma_4.style.color = 'orange'
        najma_5.style.color = 'black'
    }
    else if (haja.textContent == 2) {
        info_1.innerHTML = 'Sophie Leclerc'
        info_2.innerHTML = 'Infirmière'
        para_2.innerHTML = 'I appreciate the variety of workout options available on online fitness sites. It allows me to diversify my exercise sessions and discover new activities without having to subscribe to multiple different memberships.'
        najma_1.style.color = 'orange'
        najma_2.style.color = 'orange'
        najma_3.style.color = 'black'
        najma_4.style.color = 'black'
        najma_5.style.color = 'black'
    }
    else if (haja.textContent == 3) {
        info_1.innerHTML = 'Émilie Rousseau'
        info_2.innerHTML = 'Chef cuisinier'
        para_2.innerHTML = 'I think online fitness sites are a great solution for staying fit without having to leave the house. However, I still prefer the social aspect of in-person classes. Sometimes, I feel less motivated when working out alone at home'
        najma_1.style.color = 'orange'
        najma_2.style.color = 'orange'
        najma_3.style.color = 'orange'
        najma_4.style.color = 'orange'
        najma_5.style.color = 'orange'
    }
    else if (haja.textContent == 4) {
        info_1.innerHTML = 'Julien Moreau '
        info_2.innerHTML = 'Journaliste'
        para_2.innerHTML = 'I m a big fan of online fitness sites because they allow me to customize my workouts based on my goals and abilities. Plus I can save on gym fees and work out comfortably at home'
        najma_1.style.color = 'orange'
        najma_2.style.color = 'orange'
        najma_3.style.color = 'orange'
        najma_4.style.color = 'black'
        najma_5.style.color = 'black'
    }
    else if (haja.textContent == 5) {
        info_1.innerHTML = 'Laura Dubois'
        info_2.innerHTML = 'Psychologue'
        para_2.innerHTML = 'Online fitness sites are convenient for me because they often offer high-quality workout videos based on scientific evidence. I feel confident following these programs, knowing they are developed by qualified professionals.'
        najma_1.style.color = 'orange'
        najma_2.style.color = 'black'
        najma_3.style.color = 'black'
        najma_4.style.color = 'black'
        najma_5.style.color = 'black'
    }
    else if (haja.textContent == 6) {
        info_1.innerHTML = 'Élodie Bertrand'
        info_2.innerHTML = 'Designer graphique'
        para_2.innerHTML = 'While I occasionally use online fitness sites for quick at-home workouts, I prefer in-person classes as I enjoy the interaction with the instructor and fellow participants. It motivates me more to push myself.'
        najma_1.style.color = 'orange'
        najma_2.style.color = 'orange'
        najma_3.style.color = 'orange'
        najma_4.style.color = 'orange'
        najma_5.style.color = 'orange'
    }
    else if (haja.textContent == 7) {
        info_1.innerHTML = 'Nicolas Lefebvre'
        info_2.innerHTML = 'Avocat'
        para_2.innerHTML = 'Online fitness sites provide me with the convenience to stay active amidst my demanding legal career. While I prefer the structure of in-person classes, the flexibility of online platforms allows me to maintain a consistent workout routine.'
        najma_1.style.color = 'orange'
        najma_2.style.color = 'orange'
        najma_3.style.color = 'orange'
        najma_4.style.color = 'orange'
        najma_5.style.color = 'black'
    }
    else if (haja.textContent <= 8) {
        info_1.innerHTML = 'Léa Bergeron'
        info_2.innerHTML = 'Développeur web'
        para_2.innerHTML = 'Online fitness sites are perfect for me as I can work out at any hour that suits me, even late at night after a long day of work. Plus, some sites offer specific programs for people who work in front of a computer all day'
        najma_1.style.color = 'orange'
        najma_2.style.color = 'orange'
        najma_3.style.color = 'orange'
        najma_4.style.color = 'orange'
        najma_5.style.color = 'orange'
        haja_2.onclick = null;
    }
}

haja_3.onclick = function () {
    let currentValue = parseInt(haja.textContent);
    haja.textContent = currentValue - 1;

    if (haja.textContent <= 1) {
        info_1.innerHTML = 'Thomas Martin'
        info_2.innerHTML = 'Freelancer'
        para_2.innerHTML = 'I find online fitness sites offer great flexibility for working out at any time that suits my busy schedule. Some even have specific programs for busy individuals like me, which is really convenient.'
        najma_1.style.color = 'orange'
        najma_2.style.color = 'orange'
        najma_3.style.color = 'orange'
        najma_4.style.color = 'orange'
        najma_5.style.color = 'black'
        haja_3.onclick = null;
    }
    else if (haja.textContent == 2) {
        info_1.innerHTML = 'Sophie Leclerc'
        info_2.innerHTML = 'Infirmière'
        para_2.innerHTML = 'I appreciate the variety of workout options available on online fitness sites. It allows me to diversify my exercise sessions and discover new activities without having to subscribe to multiple different memberships.'
        najma_1.style.color = 'orange'
        najma_2.style.color = 'orange'
        najma_3.style.color = 'black'
        najma_4.style.color = 'black'
        najma_5.style.color = 'black'
    }
    else if (haja.textContent == 3) {
        info_1.innerHTML = 'Émilie Rousseau'
        info_2.innerHTML = 'Chef cuisinier'
        para_2.innerHTML = 'I think online fitness sites are a great solution for staying fit without having to leave the house. However, I still prefer the social aspect of in-person classes. Sometimes, I feel less motivated when working out alone at home'
        najma_1.style.color = 'orange'
        najma_2.style.color = 'orange'
        najma_3.style.color = 'orange'
        najma_4.style.color = 'orange'
        najma_5.style.color = 'orange'
    }
    else if (haja.textContent == 4) {
        info_1.innerHTML = 'Julien Moreau '
        info_2.innerHTML = 'Journaliste'
        para_2.innerHTML = 'I m a big fan of online fitness sites because they allow me to customize my workouts based on my goals and abilities. Plus I can save on gym fees and work out comfortably at home'
        najma_1.style.color = 'orange'
        najma_2.style.color = 'orange'
        najma_3.style.color = 'orange'
        najma_4.style.color = 'black'
        najma_5.style.color = 'black'
    }
    else if (haja.textContent == 5) {
        info_1.innerHTML = 'Laura Dubois'
        info_2.innerHTML = 'Psychologue'
        para_2.innerHTML = 'Online fitness sites are convenient for me because they often offer high-quality workout videos based on scientific evidence. I feel confident following these programs, knowing they are developed by qualified professionals.'
        najma_1.style.color = 'orange'
        najma_2.style.color = 'black'
        najma_3.style.color = 'black'
        najma_4.style.color = 'black'
        najma_5.style.color = 'black'
    }
    else if (haja.textContent == 6) {
        info_1.innerHTML = 'Élodie Bertrand'
        info_2.innerHTML = 'Designer graphique'
        para_2.innerHTML = 'While I occasionally use online fitness sites for quick at-home workouts, I prefer in-person classes as I enjoy the interaction with the instructor and fellow participants. It motivates me more to push myself.'
        najma_1.style.color = 'orange'
        najma_2.style.color = 'orange'
        najma_3.style.color = 'orange'
        najma_4.style.color = 'orange'
        najma_5.style.color = 'orange'
    }
    else if (haja.textContent == 7) {
        info_1.innerHTML = 'Nicolas Lefebvre'
        info_2.innerHTML = 'Avocat'
        para_2.innerHTML = 'Online fitness sites provide me with the convenience to stay active amidst my demanding legal career. While I prefer the structure of in-person classes, the flexibility of online platforms allows me to maintain a consistent workout routine.'
        najma_1.style.color = 'orange'
        najma_2.style.color = 'orange'
        najma_3.style.color = 'orange'
        najma_4.style.color = 'orange'
        najma_5.style.color = 'black'
    }
    else if (haja.textContent == 8) {
        info_1.innerHTML = 'Léa Bergeron'
        info_2.innerHTML = 'Développeur web'
        para_2.innerHTML = 'Online fitness sites are perfect for me as I can work out at any hour that suits me, even late at night after a long day of work. Plus, some sites offer specific programs for people who work in front of a computer all day'
        najma_1.style.color = 'orange'
        najma_2.style.color = 'orange'
        najma_3.style.color = 'orange'
        najma_4.style.color = 'orange'
        najma_5.style.color = 'orange'
    }
}

var parti_1 = document.getElementById('scroll-1');
var parti_2 = document.getElementById('scroll-2');
var parti_3 = document.getElementById("scroll-3");

var page_2 = document.getElementById('scroll-img');
var page_2_tittle = document.getElementById('tittle-page-2');
var page_2_para = document.getElementById('para-page-2');
var scrol_3 = document.getElementById('scrol-page-3');

var card_1 = document.getElementById('card-1');
var card_2 = document.getElementById('card-2');
var card_3 = document.getElementById('card-3');

window.onscroll = function () {
    //page-1
    if (scrollY >= 600) {
        //Move-1
        scrol_3.style.transition = '2s'
        scrol_3.style.marginLeft = '0vw'
        //Move-2
        card_1.style.transition = '1.5s'
        card_1.style.transform = 'scale(1)'
        card_2.style.transition = '2s'
        card_2.style.transform = 'scale(1)'
        card_3.style.transition = '2.5s'
        card_3.style.transform = 'scale(1)'
    }
    else if (scrollY <= 450) {
        //Move-1
        scrol_3.style.marginLeft = '-100vw';
        //Move-2
        card_1.style.transform = 'scale(0)'
        card_2.style.transform = 'scale(0)'
        card_3.style.transform = 'scale(0)'
    }
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

var plus_img = document.getElementById('plus-img');
var moin_img = document.getElementById('moin-img');
var haja_img = document.getElementById("plus-content")
var img = document.getElementById('change-img');

plus_img.onclick = function () {
    let currentValue_2 = parseInt(haja_img.textContent);
    haja_img.textContent = currentValue_2 + 1;

    if (haja_img.textContent == 1) {
        img.src = './Assets/terre.jpg'
    }
    else if (haja_img.textContent == 2) {
        img.src = './Assets/racing.jpg'
    }
    else if (haja_img.textContent == 3) {
        img.src = './Assets/tenisse.jpg'
    }
    else if (haja_img.textContent == 4) {
        img.src = './Assets/swim.jpg'
    }
    else if (haja_img.textContent == 5) {
        img.src = './Assets/regby.jpg'
    }
    else if (haja_img.textContent == 6) {
        img.src = './Assets/fitness.jpg'
    }
    else if (haja_img.textContent == 7) {
        img.src = './Assets/ffotballe.jpg'
    }
    else if (haja_img.textContent <= 8) {
        img.src = './Assets/sport.jpg'
        plus_img.onclick = null
    }
}
moin_img.onclick = function () {
    let currentValue_2 = parseInt(haja_img.textContent);
    haja_img.textContent = currentValue_2 - 1;

    if (haja_img.textContent <= 1) {
        img.src = './Assets/terre.jpg'
        moin_img.onclick = null
    }
    else if (haja_img.textContent == 2) {
        img.src = './Assets/racing.jpg'
    }
    else if (haja_img.textContent == 3) {
        img.src = './Assets/tenisse.jpg'
    }
    else if (haja_img.textContent == 4) {
        img.src = './Assets/swim.jpg'
    }
    else if (haja_img.textContent == 5) {
        img.src = './Assets/regby.jpg'
    }
    else if (haja_img.textContent == 6) {
        img.src = './Assets/fitness.jpg'
    }
    else if (haja_img.textContent == 7) {
        img.src = './Assets/ffotballe.jpg'
    }
    else if (haja_img.textContent == 8) {
        img.src = './Assets/sport.jpg'
    }
}