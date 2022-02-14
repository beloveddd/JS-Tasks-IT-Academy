// 1 task

let length = +prompt('Введите длину');
let width = +prompt('Введите ширину');
let square = length * width;
let perimeter = 2 * (length + width);
console.log(square);
console.log(perimeter);

if (width === length) console.log('Это квадрат!');

// 2 task

let month = +prompt('Введите номер месяца');

if (month === 12 || month === 1 || month === 2) {
    console.log('Это зима!');
} else if (month >= 3 && month <= 5) {
    console.log('Это весна!');
} else if (month >= 6 && month <= 8) {
    console.log('Это лето!');
} else if (month >= 9 && month <= 11) {
    console.log('Это осень!');
} else {
    console.log('Введите номер МЕСЯЦА, пожалуйста');
}

// 3 task

let num = +prompt('Введите число для проверки');

let even = 'Четное';
let odd = 'Нечетное';
let integer = 'Целое';
let fractional = 'Дробное'; 
let positive = 'Положительное';
let negative = 'Отрицательное';
let zero = 'Ни положительное и не отрицательное';

let a = num % 2 === 0;
let b = num % 1 === 0;
let c = num > 0;
let d = num === 0;

if (a) {
    a = even;
} else {
    a = odd;
}

if (b) {
    b = integer;
} else {
    b = fractional;
}

if (c) {
    c = positive;
} else if (d) {
    d = zero;
} else {
    c = negative;
}

if (num != 0) {
    console.log(`${num}: ${a}, ${b}, ${c} `);
} else {
    console.log(`${num}: ${a}, ${b}, ${d} `); 
}
