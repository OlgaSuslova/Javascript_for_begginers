// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

let num1 = Number(prompt("Input number 1: "));
let num2 = Number(prompt("Input number 2: "));
if (num1 <= 1 && num2 >= 3) {
    console.log("Verification is OK");    
} else {
    console.log("Verification is failed");
}

// Задание 2
// Перепишите код к тернарному оператору

// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }

let test = true;
(test === true) ? console.log('+++') : console.log('---');


// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let day = 31;
if (day > 0 && day <= 10) {
    console.log("Первая декада месяца");
} else if (day > 10 && day <= 20) {
    console.log("Вторая декада месяца");
} else {
    console.log("Третья декада месяца");
}

// Задание 4
// Необязательное задание. (Если вам показалось домашнее задание простым, выполняем данный пункт)
// (Для решения задания вам потребуется оператор остаток от деления %, например 10%3 === 1 , десять разделить на 3, остаток 1, второй пример 7 % 5, тут остаток от деления будет 2, ну и 3 пример это 14 % 10 === 4, остаток от деления на 10 будет равен 4)
// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

// let userNumber = Number(prompt("Введите число: "));