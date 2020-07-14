// Пользователь вводит строку с текстом. Посчитать и вывести на экран количество согласных, гласных букв(латинских) в тексте, а также не-букв.
var x = prompt();
var letters1 = ['a', 'e', 'i', 'o', 'u', 'y'];
var letters2 = ['q', 'w', 'r', 't', 'p', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
let count1 = 0;
let count2 = 0;

for (let i = 0; i < x.length; i ++) {
    if (letters1.includes(x[i])) {
        count1 ++;
    }

    if (letters2.includes(x[i])) {
        count2 ++;
    }
}

alert(count1);
alert(count2);
alert(x.length - count1 - count2);

// Пользователь вводит число. Определить и вывести, является ли число простым или составным.
var n = prompt();
n = Number(n);

var flag = true;
for (let i = 2; i < n ; i++) {
    if (n % i === 0) {
        flag = false;
        alert('Составное!');
    }
}

if (flag) {
    alert('Простое!');
}


// Пользователь вводит с клавиатуры число, знак арифметической операции и ещё одно число. Вывести результат введенной операции с введенными числами.
var a = Number(prompt());
var op = prompt();
var b = Number(prompt());

if (op === '+') {
    alert(a + b);
}
if (op === '-') {
    alert (a - b)
}
if (op === '*') {
    alert(a * b);
}
if (op === '/') {
    alert(a / b);
}

// Пользователь вводит кол-во секунд (не больше 86 399). Вывести отформатированное значение: часы:минуты:секунды. Например, 47843 = 13:17:23
const seconds = Number(prompt());

const hours = Math.floor(seconds / 3600);
const minutes = Math.floor((seconds - hours * 3600) / 60);
const secs = seconds % 60;

alert(hours + ':' + minutes + ':' + seconds);
