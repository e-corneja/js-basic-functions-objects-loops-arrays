/*Создайте функцию concatNames, которая принимает два параметра с именами obj и lastname.
Верните из функции строку, которая содержит в себе ключ firstname из объекта obj, а следом через пробел значение параметра lastname. */
// пример проверки

const person = {
  firstname: "Халид",
  age: 22,
};

function concatNames(obj, lastname) {
  return `${obj.firstname} ${lastname}`;
}

console.log(concatNames(person, "Аюбов"));

// console.log(concatNames(person, "Аюбов"));
// в консоле должно быть 'Халид Аюбов'

/////////////////////////////////////////////////
/* 4.2. Напишите функцию correctName, которая принимает один параметр (это будет объект).
Если в принятом объекте ключ fathername имеет значение undefined, то верните только ключ firstname.
В ином случае верните строку, которая содержит конкатенацию следующих ключей fistname + lastname + fathername */

function correctName(obj) {
  if (obj.fathername === undefined) {
    return obj.firstname;
  } else {
    return `${obj.firstname} ${obj.lastname} ${obj.fathername}`;
  }
}

// пример проверки
const firstPerson = {
  firstname: "Халид",
  lastname: "Аюбов",
  fathername: undefined,
};

console.log(correctName(firstPerson));
// в консоле должно быть 'Халид'

const secondPerson = {
  firstname: "Халид",
  lastname: "Аюбов",
  fathername: "Исаевич",
};

console.log(correctName(secondPerson));
// в консоле должно быть 'Аюбов Халид Исаевич'
