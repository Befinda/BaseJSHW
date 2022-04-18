"use strict";
/*Задание №1*/
let tc = null;
let tf = null;

tc = +prompt("Введите температуру в градусах Цельсия");
tf = (9 / 5) * tc + 32;
alert("Температура по Фаренгейту: " + tf);

/*Задание №2*/
let admin = null;
let name = "Василий";

admin = name;
console.log(admin);

/*Задание №3*/

/* 1. Числу 10 прибавляем число 10 получаем число 20
2. Так как второй операнд строка, то 20 становится строкой и происходит конкатенация строк "20" и "10", получаем "2010"
*/
let result = 10 + 10 + "10";
console.log(result);

/* 1. Операции выполняются слева направо. К числу 10 прибавляется строка "10", получаем строку"1010"
2. К строке "1010" прибавляется число 10, получаем строку "101010"
*/
result = 10 + "10" + 10;
console.log(result);

/* 1. Унарный плюс является приоритетной операцией. Строка "10" приводится к типу число унарным плюсом, получается число 10
2. Далее операции выполняются начала выражения слева направо. К числу 10 прибавляем число 10, получаем число 20
3. К числу 20 прибавляем число 10, получаем число 30*/
result = 10 + 10 + +"10";
console.log(result);

/* 1. Выполняется операция унарного минуса, строка "" приводится к типу число, получаем число -0
2. Число 10 делим на число -0, получаем -Infinity*/
result = 10 / -"";
console.log(result);

/* 1. Выполняется операция унарного плюса, строка "2,5" приводится к типу число, получаем NaN, т.к. дробные числа в JS отделяются точкой, а не запятой
2. Число 10 делим на NaN, получаем NaN*/
result = 10 / +"2,5";
console.log(result);
