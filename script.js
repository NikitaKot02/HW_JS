// № 1

    
// let a = +prompt('a = '),
//     b = +prompt('b = '),
//     c = +prompt('c = ');

// function calc1(a, b, c){
//     return (a - b) / c;
// }

// console.log(calc1(a, b, c));

// № 2

// let d = +prompt('d = ');

// function calc2(d){
//     return ('куб = ' + Math.pow(d, 3) + ' квадрат числа = ' + Math.pow(d, 2));
// }

// console.log(calc2(d));


// № 3

// let a = +prompt('a = '),
//     b = +prompt('b = ');

// function min(a, b){
//     if(a < b) return a;
//     else return b;
// }

// function max(a, b){
//     if(a > b) return a;
//     else return b;
// }

// console.log('Меньшее число', min(a, b));
// console.log('Большее число',max(a, b));


// № 4

// let a = +prompt('a = '),
//     b = +prompt('b = ');

// function createArr(a, b){
//     let arr = [];
//     for (let i = a; i < b; i++) {
//         arr.push(i);
//     }

//     return arr;
// }

// function showArr(arr) {
//     for(let el of arr){
//         console.log(el);
//     }
// }

// showArr(createArr(a, b));


// № 5

// let a = +prompt('Введите число');

// function isEven(a){

//     return (a % 2 ==+ 0) ? true : false;
// }

// console.log(isEven(a));


// № 6

// console.log('6. Напишите ф-цию, в которую передается массив с целыми числами. Верните новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.');
// let arr6 = [];
// function exp6(r){
//     for(let i = 0; i <= r.length; i++){
//        if(isEven(r[i]) !== true) arr6.push(i);
//     }
//     return arr6
// };
// console.log(exp6(arr4));


// № 7

// function pyramid(len){
//     let marker = '';
//     if (arguments.length > 1) {
//        if (arguments[1] !== ' ' && String(arguments[1]).length === 1) {
//             marker = arguments[1];
//        }
//     } 

//     for (let i = 1; i < len + 1; i++) {
//         for (let j = 0; j < i; j++) {
//             document.write(marker ? marker : i);
//         }

//         document.write('<br/>');
//     }
// }



// № 9

// let n = +prompt('Введите число');

// function fib(n) {
//     return n < 3 ? 1 : fib(n - 1) + fib(n - 2);
// }

// console.log(fib(n));


// № 10

// function summ(num) {
//     let sum = 0;
//     num += '';

//     for (let n of num) {
//         sum += +n;
//     }

//     if (sum < 10) return sum;
        
//     return summ(sum);
// }
