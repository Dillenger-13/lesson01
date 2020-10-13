"use strict";

if (4 == 4) {
    console.log('ok!');
} else {
     console.log('error!');
}

/*const num = 50;

if (num < 49) {
    console.log('error!');
} else if (num > 100) {
    console.log('много');
} else {
    console.log('ok!');
}

(num === 50) ? console.log('ok!') : console.log('error');*/
/*Записывать такой большой конструкцией, не удобно, поэтому у нас есть такая команда, как switch*/


const num =50;

setInterval(() => console.log('Эй чи!'), 3000)
switch (num) {
case 49:
    return console.log('Неверно');
    break;
case 100:
    return console.log('Неверно');
    break;
case 52:
    return console.log('В точку!');
    break;
default:
    return console.log('Не в этот раз');
    break;
}

