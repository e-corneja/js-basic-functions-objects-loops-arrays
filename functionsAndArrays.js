/* Создайте файл functionsAndArrays.js. В нем напишите функцию, которая принимает на вход два массива из чисел. Функция должна вернуть true, если сумма чисел из обоих массивов одинаковая, иначе функция должна вернуть false. */
let arr1 = [11, 22];
let arr2 = [1, 20, 10, 1, 1];

function hasEqualSums(first, second) {
  first = arr1.reduce((prev, curr) => prev + curr, 0);
  second = arr2.reduce((prev, curr) => prev + curr, 0);
  if (first === second) {
    return true;
  } else {
    return false;
  }
}

console.log(hasEqualSums(arr1, arr2));

/* В ранее созданном файле, напишите функцию, которая принимает два параметра: массив имен и число. 
-  Функция должна вернуть массив, в котором остались только те имена, длина которых соответствует указанному во втором параметре числу. */

const arr = ["alt", "shoo", "js", "html", "git", "code"];

let myArr = [];
let index = 0;

function filterNames(names, index) {
  i = 0;
  while (i < arr.length) {
    if (String(arr[i]).length === index) {
      myArr.push(arr[i]);
    }
    i++;
  }
  return myArr;
}

console.log(filterNames(myArr, 4));

// должен вернуть массив ['code', 'html']
