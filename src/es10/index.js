/**
 * CLASE 10
 */
// ** FLAT y FLATMAP
const arreglo = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];

const arregloFlat = arreglo.flat(); // [ 1, 2, 3, 4, 5, 6, [ 7, 8, 9 ] ]
const arregloFlat1 = arreglo.flat(2); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

const otroArreglo = [1, 2, 3, 4, 5, 6];
const arregloFlatMap = otroArreglo.flatMap((value) => [value, value + 10]);
// [1, 11, 2, 12, 3, 13, 4, 14, 5, 15, 6, 16]

// ** TRIM - Elimina los espacios en blanco en las cadenas de caracteres
let texto = "           Hola texto";
let otroTexto = "Hola texto           ";
const textoSinEspacios = texto.trimStart(); // "Hola texto"
const otroTextoSinEspacios = otroTexto.trimEnd(); // "Hola texto"

// antes de ES10
try {
  // CODE
} catch (error) {
  error;
}

// ES10
try {
} catch {
  error;
}

// ** ARREGLOS A OBJETOS
let entries = [
  ["name", "PkY"],
  ["age", 33],
  ["country", "ARG"],
];

let objEntries = Object.fromEntries(entries);
console.log(objEntries);
// { name: 'PkY', age: 33, country: 'ARG' }

// OBJETO DE TIPO SYMBOL

let mySymb = "Soy un simbolo";
let symb = Symbol(mySymb);
console.log(symb.description);