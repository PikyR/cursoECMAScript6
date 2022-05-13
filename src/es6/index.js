/**
 * CLASE 02
 */

// JS
function pirmeraFuncion(name, age, country) {
  name = name || "Pky";
  age = age || 32;
  country = country || "ARG";

  console.log("Primera función: ", name, age, country);
}

pirmeraFuncion();

// ECMAScrip 6
function segundaFuncion(name = "PKY", age =  33, country = "AR") {
  console.log("Segunda función: ", name, age, country);
}

console.log("Sin parámetros:");
segundaFuncion();

console.log("Con parámetros:");
segundaFuncion("Coso", 99);

// ** Template literal'ss
// Concatenación tradicional
const saludo1 = "Hola";
const saludo2 = "mundo";

const saludoCompleto = saludo1 + " " + saludo2;
console.log(saludoCompleto); // Hola mundo

// Ejemplo de concatenacion utilizando Template literal
// se hace un llamado a las variables similar a php
const templateLiteral = `${saludo1} ${saludo2}`;
console.log(templateLiteral); // Hola mundo
/* Fin de clase 02 */

/**
 * Clase 03
 */

// ** Saltos de linea en cadenas de texto

//JS
const lorem = "Aliquam pharetra lorem sed sem vestibulum sollicitudin.\n"
+ "Nulla sagittis quam ut nisl pharetra accumsan.\n"
+ "Donec blandit iaculis est, vitae euismod odio molestie id.\n";

// es6 
// otro ejemplo de 'Template Literal'
const otroSaltoDeLinea = `Nam vestibulum ullamcorper nunc in mattis. 
In eu nulla non diam pulvinar volutpat ut vel mauris. 
Praesent blandit accumsan facilisis. 
Pellentesque habitant morbi tristique senectus.`;

console.log("JS:", lorem);
console.log("es6:", otroSaltoDeLinea);

// ** Desestructuración
// EJEMPLO:
// const coso = [1, 2, 3];
// const [uno, dos, tres] = coso;
// console.log(uno, dos, tres); // 1 2 3
// console.log("coso: ", coso); // coso: [1, 2, 3]
// FIN DE EJEMPLO

let person = {
  name: "PKY",
  age: 33,
  country: "AR"
}

// En la siguiente asignacion se crean tres nuevas variables,
// con los 'values' de las 'keys' del objeto 'person'
let {name, age, country} = person;

console.log(name); // PKY
console.log(age); // 33
console.log(country); // AR

// Lo anterio equivale a lo siguiente: 
console.log(person.name, person.age, person.country); // PKY 33 AR

// ** Operador de propagación (...) tres puntos
let equipoUno = [ "primero", "segundo", "tercero"];
let equipoDos = [ "CUARTO", "QUINTO", "SEXTO"];

let equipoGeneral = ["NuevoElemento", ...equipoUno, ...equipoDos];

console.log(equipoGeneral);
// [
//   'NuevoElemento',
//   'primero',
//   'segundo',
//   'tercero',
//   'CUARTO',
//   'QUINTO',
//   'SEXTO'
// ]
/* FIN CLASE 03 */

/**
 * CLASE 04
 */

// ** Parametros en objetos
// JS
const nameC4 = 'PikyR';
const ageC4 = '22';

obj = { name: nameC4, age: ageC4};

// ec6
obj2 = { nameC4, ageC4};

// ** Arrow Functions
// 

const names = [
  { name: "Peky", age: 99},
  { name: "Coso", age: 88},
  { name: "Comue", age: 77}
];

//JS
let listOfNames = names.map(
  function (item) {
    console.log(item.name);    
  }
);

//es6
let listOfAges = names.map(item => console.log(item.age));

const listOfNames2 = (name, age) => {
  // declaracion de la función
};

const listOfAges2 = age => {
  // declaracion de la función
};

const square = num => num * num;
console.log(square(5)); //25

// ** Promesas
const primerPromesa = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Aja!");
    } else {
      reject("Nai!");
    }
  });
};

primerPromesa()
  .then(response => console.log(response))  
  .catch(error => console.log(error));
/* FIN DE CLASE 04*/