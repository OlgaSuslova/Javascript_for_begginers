// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

function getCube(userNumber) {
    return userNumber * userNumber * userNumber;
}

console.log(getCube(2) + getCube(3));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

let userSalary = Number(prompt("Введите размер вашей заработной платы: "));
getUserSalary(userSalary);

function getUserSalary(userSalary) {
    if (isNaN(userSalary)) {
        console.log("Неправильный ввод");        
    } else {
        console.log(userSalary * 0.87);
    }
}

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

let userNumber1 = Number(prompt("Введите первое число: "));
let userNumber2 = Number(prompt("Введите второе число: "));
let userNumber3 = Number(prompt("Введите третье число: "));

getMax(userNumber1, userNumber2, userNumber3);

function getMax(userNumber1, userNumber2, userNumber3) {
    if (userNumber1 > userNumber2 && userNumber1 > userNumber3) {
        console.log(`Максимальное число ${userNumber1}`);
    } else if (userNumber2 > userNumber1 && userNumber2 > userNumber3) {
        console.log(`Максимальное число ${userNumber2}`);
    } else {
        console.log(`Максимальное число ${userNumber3}`);
    }
}

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

getSum(2, 6);
getDiff(2, 6);
getMultiply(2, 6);
getDivision(2, 6);

function getSum(number1, number2) {
    console.log(number1 + number2);
}

function getDiff(number1, number2) {
    if (number1 > number2) {
        console.log(number1 - number2);
    } else if (number2 > number1){
        console.log(number2 - number1);
    } else {
        console.log(number1 - number2);
    }
}

function getMultiply(number1, number2) {
    console.log(number1 * number2);
}

function getDivision(number1, number2) {
    console.log(number1 / number2);
}