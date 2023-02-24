// № 1

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log('-----------');


// № 2

let a = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for(let j = 0; j < a.length; j++){
    if(a[j] > -10 && a[j] < -3){
        console.log(a[j])
    } else continue;
}

console.log('-----------');

// № 3

let b = [];
let result = 0,
    j = 0;

for(let i = 23; i <= 57; i++){
    console.log(b[j] = i);
    result += b[j];
    j++;
}    

console.log('-----------');

let m = 23,
    k = 0;

while(m <= 57){
    console.log(b[k] = m);
    k++;
    m++;
}

console.log(result);

console.log('-----------');


// № 4

let c = ['10', '20', '30', '50', '235', '3000'];


for(let i = 0; i < c.length; i++){
    if(c[i][0] == 1 || c[i][0] == 2 || c[i][0] == 5){
        console.log(c[i]);
    }
}

console.log('-----------');


// № 5

let days = ['ПН', "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

for(let i = 0; i < days.length; i++){
    if(days[i] === 'СБ' || days[i] === 'ВС'){
        console.log(days[i].bold());
    }else{
        console.log(days[i]);
    }
}

console.log('-----------');


// № 6

let d = ['10', '20', '30', '50', '235', '3000'];

d.push('4545');
console.log(d[d.length - 1]);

console.log('-----------');


// № 7

let e =[];

while (1) {
    let m = +prompt('Введите число');
    if (isNaN) continue;
    if (m === '' && +m !== '0') break;
    e.push(+m);
}

console.log(e);

// № 8

let g = [12, false, 'Текст', 4, 2, -5, 0],
    i = 0;

while(i < g.length-1){
    console.log(g.reverse());
    i++;
}

console.log('-----------');

// № 9

let h = [5, 9, 21, , , 9, 78, , , , 6];

for(let i = 0; i < h.length; i++){
    if (!h[i] && h[i] !== 0) {
        j++;
    }
}

console.log(j)
console.log('-----------');






