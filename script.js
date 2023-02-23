let html = document.querySelector('html');
html.setAttribute('lang', 'en');

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');

let title = document.createElement('title');
title.innerHTML = 'Call to Action';

document.head.insertBefore(metaUtf8, document.querySelector('script'));
document.head.insertBefore(title, document.querySelector('script'));

let container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

let title_block = document.createElement('div');
title_block.classList.add('title_block');
container.appendChild(title_block);

let title_3 = document.createElement('h3');
title_3.innerHTML = 'Choose Your Option';
title_3.classList.add('title_3');
title_block.appendChild(title_3);

let text = document.createElement('p');
text.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
text.classList.add('text');
title_block.appendChild(text);

let cards = document.createElement('div');
cards.classList.add('cards');
container.appendChild(cards);

let card = document.createElement('div');
card.classList.add('card');
cards.appendChild(card);

let title_2 = document.createElement('h2');
title_2.innerHTML = 'FREELANCER';
title_2.classList.add('title_2');
card.appendChild(title_2);

let title_3_2 = document.createElement('h3');
title_3_2.innerHTML = 'Initially designed to';
title_3_2.classList.add('title_3');
card.appendChild(title_3_2);

let textClone = text.cloneNode(true);
card.appendChild(textClone);

let button = document.createElement('div');
button.innerHTML = 'START HERE';
button.classList.add('button');
card.appendChild(button);

let cardClone = card.cloneNode(true);
cards.appendChild(cardClone);

let card_2_title = cardClone.querySelector('.title_2');
card_2_title.innerHTML = 'STUDIO';
card_2_title.classList.add('card_2_title');

let card_2_text = cardClone.querySelector('.text');
card_2_text.classList.add('card_2_text');

let button_2 = cardClone.querySelector('.button');
button_2.classList.add('button_2');


let style = document.createElement('style');
style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@700&family=Open+Sans&display=swap');

    *{
        margin: 0;
        padding: 0;
    }

    body{
        background: #fff;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 26px;
        color: #9FA3A7;
    }

    .title_2{
        color: #9FA3A7;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 2.4px;
        margin-top: 82px;
        margin-bottom: 19px;
    }

    .title_3{
        font-family: 'Arvo';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 48px;
        color: #212121;
    }

    .container{
        max-width: 800px;
        width: 100%;
        margin: 0 auto;
        padding-top: 122px;
        padding-bottom: 139px;

    }

    .title_block{
        max-width: 464px;
        width: 100%;
        margin: 0 auto;
        margin-bottom: 55px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .title_block .title_3{
        margin-bottom: 10px;
    }

    .cards{
        display: flex;
    }

    .card{
        max-width: 400px;
        width: 100%;
        height: 479px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .card:first-child{
        border: 1px solid #E8E9ED;
        border-right: 0;
        border-radius: 2.7px 0 0 2.7px;

    }

    .card:last-child{
        background: #8F75BE;
        border: 1px solid transparent;
        border-radius: 0 2.7px 2.7px 0;
    }

    .card_2_title{
        color: #FFC80A;
    }

    .card .title_3{
        line-height: 46px;
        max-width: 210px;
        text-align: center;
        margin-bottom: 25px;
    }

    .card .text{
        font-size: 12px;
        line-height: 22px;
        max-width: 210px;
        text-align: center;
        margin-bottom: 64.5px;
    }

    .card_2_text{
        color: #fff;
    }

    .button{
        max-width: 147px;
        width: 100%;
        height: 46px;
        border: 3px solid #FFC80A;
        border-radius: 50px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        color: #212121;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: .4s;
    }

    .button:hover{
        background: #FFC80A;
        opacity: .7;
    }

    .button_2{
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        color: #fff;
    }
`;

document.head.appendChild(style);