/**
 * CLASE 09
 */

// ** OPERADOR DE PROPAGACIÓN (...)
const obj = {
  name: "pkY",
  age: 33,
  country: "ARG",
};

const obj1 = {
  ...obj,
  city: "TDV",
};

let { name, ...coso } = obj;
console.log(name); // pkY
console.log(coso); // { age: 33, country: 'ARG' }

console.log(obj1); // { name: 'pkY', age: 33, country: 'ARG', city: 'TDV' }

// ** PROMISE
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve("Hello world"), 1000)
      : reject( new Error("Test error!"))
  })
};

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log("FIN"))
;

// ** REGEX

const regexDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexDate.exec("2022-12-31");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);