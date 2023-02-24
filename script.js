// № 1

for (let  m = 1; m <= 50; m++) {
    console.log(m); 
}

console.log('---------------');

for (let k = 35; k >= 8; k--) {
    console.log(k);
}

console.log('---------------');


// № 2

let l = 89;

while (l >= 11) {
    console.log(l);
    l--;
}

console.log('---------------');


// № 3

let sum = 0;

for (let a = 0; a <= 100; a++) {
    sum += a;
}

console.log(sum);

console.log('---------------');


// № 4

let b = +prompt('Введите число от 1 до 5');
let summ = 0;

if(b >= 1 && b <= 5){
    for(let c = 0; c <= b; c++){
        summ += c;
    }
    console.log(summ);
} else{
    console.log('Число не в диапазоне 1..5');
}

console.log('---------------');


// № 5

for(let d = 8; d <= 56; d++){
    if( d % 2 === 0){
        console.log(d);
    }
}

console.log('---------------');

let d = 8;
while(d <= 56){
    if(d % 2 == 0){
        console.log(d);
    }
    d++
}

console.log('---------------');


// № 6

for(let i = 1; i < 10; i++){
    for(let j = 1; j < 10; j++){
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

console.log('---------------');


// № 7

let num = 0;

for(let n = 50; n <= 1000;  n++){
    n /= 2;
    num++
}

console.log('Результат:', n);
console.log('Количество итераций:', num);

console.log('---------------');


// № 8

let s = 0,
    ind = 0;

while (1) {
    let p = +prompt('Введите число');
    if (p === 0) break;
    if (isNaN(p)){
        console.log('Введено не число');
        continue;
    }

    s += p;
    ind++;
}

console.log('Сумма =', s);
console.log('Среднее арифметическое =', s / ind);

console.log('---------------');

// № 9

let numb = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57',
    min = Infinity,
    max = -Infinity,
    g = '';

for (let z = 0; z < numb.length; z++) {
    if (numb[z] !== ' '){
        g += numb[z];
    } else{
        if (+g > max) max = +g;
        if (+g < min) min = +g;
        g = '';
    }
}

console.log(max, min);

console.log('---------------');


// № 10

let numn = prompt('Введите число');
let len = numn.length,
    summa = 0,
    obr = '';

for (let f = 0; f < len; f++) {
    summa += +numn[f];
}

for (let f = len - 1; f >= 0; f--) {
    obr += numn[f];
}

console.log(`Вводимое число ${numn}, цифр в числе ${len}, сумма ${summa}, обратный порядок ${obr}`);