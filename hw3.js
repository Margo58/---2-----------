let password = '444';
let age = prompt('Введите пароль');

if (age >= 444) {
    password = 'Пароль введен верно';
} else {
    password = 'Пароль введен неправильно';
}
alert(password);

const c = 0;
c >= 0 && c <= 10 ?
console.log('Верно') : console.log('Неверно');

const n = 10;
n >= 0 && n <= 10 ?
console.log('Верно') : console.log('Неверно');

const i = -3;
i >= 0 && i <= 10 ?
console.log('Верно') : console.log('Неверно');

const p = 10;
p >= 0 && p <= 10 ?
console.log('Верно') : console.log('Неверно');

const d = 45;
const e = 130;
d <= e || d >= e ?
console.log('Верно') : console.log('Неверно');

let a = 2;
let b = 3;
alert(a + b);

let monthNumbe = Number(prompt('Введите число от 1 до 12'));

switch (monthNumbe) {
    case 12 :
    case 1:
    case 2:
        console.log('Зима')
        break;
    case 3:
    case 4:
    case 5:
        console.log('Осень')
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето')
        break;
    case 9:
    case 10:
    case 11:
        console.log('Весна')
        break;
    default:
        console.log('Такого числа нет');
        break;
}

let someNumber = prompt('Пожалуйста введие любое чило');
if (isNaN(someNumber)) {
    alert('это не число');
} else {
    if ((someNumber % 2) === 0) {
        alert('четное число');
    } else {
        alert('число не четное');
    }
}

let clientOS = Number(prompt('Пожалуйста, укажите 0, если вы пользователь IOS, и 1, если вы пользователь Android'));

if (clientOS === 0) {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 1)  {
    console.log('Установите версию приложения для Android по ссылке');
} else {
    console.log('Извините, но мы не работаем с другими OS, кроме IOS или Android'); 
}

