// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < array.length; i++) {
//     if (array[i] === 0) {
//         console.log(`${array[i]} - это ноль`);
//     } else if (array[i] % 2 === 0) {
//         console.log(`${array[i]} - число четное`);
//     } else {
//         console.log(`${array[i]} - число нечетное`);
//     }    
// }

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// let array = [1, 2, 3, 4, 5, 6, 7];
// console.log(array);
// array.splice(3, 2);
// console.log(array);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// let array = [];
// lengthArray = 5;
// console.log(`Сгенерированный массив: ${createArray(array, lengthArray)}`);
// console.log(`Сумма элементов: ${getSum(array)}`);
// console.log(`Минимальное число: ${findMin(array)}`);
// console.log(`Число 3 встречается ${findThree(array)} раз(а)`);


// function createArray(array, lengthArray) {
//     for (let i = 0; i < lengthArray; i++) {
//         array.push(Math.ceil(Math.random() * 10));        
//     }
//     return array;
// }

// function getSum(array) {
//     sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum = sum + array[i];        
//     }
//     return sum;
// }

// function findMin(array) {
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < min) {
//             min = array[i];
//         }        
//     }
//     return min;
// }

// function findThree(array) {
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 3) {
//             count = count + 1;
//         }        
//     }
//     return count;
// }




// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

// let line = "";
// for (let index = 0; index < 20; index++) {
//     line = line + "x";
//     console.log(line);   
// }