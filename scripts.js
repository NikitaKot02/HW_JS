
// Задание 2

let a1 = 5 % 3;
console.log(a1, typeof a1);

let a2 = 13 % 5;
console.log(a2, typeof a2);

let a3 = 5 + '3';
console.log(a3, typeof a3);

let a4 = '5' - 3;
console.log(a4, typeof a4);

let a5 = 75 + 'кг';
console.log(a5, typeof a5);

let a6 = 785 * 653;
console.log(a6, typeof a6);

let a7 = 100 / 25;
console.log(a7, typeof a7);

let a8 = 0 * 0;
console.log(a8, typeof a8);

let a9 = 0 / 2;
console.log(a9, typeof a9);

let a10 = 89 / 0;
console.log(a10, typeof a10);

let a11 = 98 + 2;
console.log(a11, typeof a11);

let a12 = 5 - 98;
console.log(a12, typeof a12);

let a13 = (8 + 56 * 4) / 5;
console.log(a13, typeof a13);

let a14 = (9 - 12) * 7 / (5 + 2);
console.log(a14, typeof a14);

let a15 = + "123";
console.log(a15, typeof a15);

let a16 = 1 || 0;
console.log(a16, typeof a16);

let a17 = false || true;
console.log(a17, typeof a17);

let a18 = true > 0;
console.log(a18, typeof a18);

// Задание 3

let h = 23,
    c = 10,
    SPryam = c * h;
console.log(SPryam + ' см2');

// Задание 4

let H = 10,
    VCilindra = 3.14 * a7 / 2 * a7 / 2 * H;
console.log(VCilindra + ' м3');

// Задание 5

let r = 5,
    SKruga = 3.14 * r * r;
console.log(SKruga + ' cм2');

// Задание 6

let a = 5,
    b = 7,
    hTr = 10,
    STrap = (a + b)/2 * hTr;
console.log(STrap + ' см2');

// Задание 7

let S = 2000000,
    p = 10,
    years = 5,
    Pereplata = S * (p / (1 + p) - years * 12 - 1) * years * 12 - S;
console.log(Pereplata + ' руб');

// Задание 8

let A = 8,
    B = 3,
    x1 = (16 - A) / 2 + B,
    x2 = (A - 15 * B) / (B - 6),
    x3 = 23780 / (3 + A +B);
console.log('x1 = ' + x1, 'x2 = ' + x2, 'x3 = ' + x3);