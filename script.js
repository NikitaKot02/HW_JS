// № 1

let name = prompt('Как Вас зовут?'),
    age = +prompt('Ваш возраст?'),
    city = prompt('Где Вы проживаете?'),
    phone = prompt('Ваш номер телефона?'),
    email = prompt('Ваша электронная почта?'),
    company = prompt('В какой компании Вы работаете?');

console.log(`Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}.`); 


// № 2

console.log(`${name} родился в ${2023 - age} году`);


// № 3

let str = prompt('Введите строку из  6 цифр');
console.log(str);

if (str.length === 6) {
    if (Number(str[0]) + Number(str[1]) + Number(str[2]) == Number(str[3]) + Number(str[4]) + Number(str[5])) {
        console.log('Да')
    } else {
        console.log('Нет');
    } 
} else {
    console.log('Вы ввели строку не из 6 цифр');
}


// № 4

let a = +prompt('Введите число');

if (isNaN(a)) {
    console.log('Введенное значение не является числом');5
} else {
    if (a > 0) {
        console.log('Верно');
    } else{
        console.log('Неверно');
    }
}


// № 5

let b = 2;
a = 10;

console.log('Сумма a + b = ', a + b); 
console.log('Разность a - b = ', a - b); 
console.log('Произведение a * b = ', a * b); 
console.log('Частное a / b = ', a / b); 

if ((a + b) > 1){
    console.log(Math.pow((a + b), 2));
} 


// № 6

if ((a > 2 && a < 11) || (b >= 6 && b < 14)){
    console.log("Верно");
} else{
    console.log("Неверно");
}


// № 7

let n = +prompt('Введите число в пределах от 0 до 59');

if (n >= 0) {
    if (n <= 15) {
        console.log('Первая четверть часа');
    } else if (n <= 30){
        console.log('Вторая четверть часа');
    } else if (n <= 45){
        console.log('Третья четверть часа');
    } else if (n <= 59){
        console.log('Четвертая четверть часа');
    } else {
        console.log('Число не находится в пределах 0..59');
    } 
} else {
    console.log('Число не находится в пределах 0..59');
}


// № 8

let day = +prompt('Введите число');

if (day >= 1) {
    if (day <= 10) {
        console.log('Первая декада месяца');
    } else if (day <= 20){
        console.log('Вторая декада месяца');
    } else if (day <= 31){
        console.log('Третья декада месяца');
    } else {
        console.log('Число не находится в пределах 1..31');
    } 
} else {
    console.log('Число не находится в пределах 1..31');
}


// № 9

if (day >= 0) {
    console.log(`${day / 365} год(-а) (лет), ${day / 31} месяц(-а)(-ев), ${day / 7} недель(-и), ${day * 24} часа(-ов), ${day * 1440} минут, ${day * 86400} секунд`); 
    if ((day / 365) < 1) console.log("Меньше года");
    if ((day / 31) < 1) console.log("Меньше месяца");
    if ((day / 7) < 1) console.log("Меньше месяца");
} else {
    console.log('День не может быть отрицательным числом!');
}


// № 10

let overYear = null,
    mont = Math.floor(day / 31) +1;

if (day > 365) {
    overMont = Math.floor(day / 365);
    day %= 365;
}

switch (mont) {
    case 1:
        console.log('Зима');
        console.log('Январь');
        break;
    case 2:
        console.log('Зима');
        console.log('Февраль');
    break;
    case 3:
        console.log('Весна');
        console.log('Март');
    break;
    case 4:
        console.log('Весна');
        console.log('Апрель');
    break;
    case 5:
        console.log('Весна');
        console.log('Май');
    break;
    case 6:
        console.log('Лето');
        console.log('Июнь');
    break;
    case 7:
        console.log('Лето');
        console.log('Июль');
    break;
    case 8:
        console.log('Лето');
        console.log('Август');
    break;
    case 9:
        console.log('Осень');
        console.log('Сентябрь');
    break;
    case 10:
        console.log('Осень');
        console.log('Октябрь');
    break;
    case 11:
        console.log('Осень');
        console.log('Ноябрь');
    break;
    default:
        console.log('Зима');
        console.log('Декабрь');
}