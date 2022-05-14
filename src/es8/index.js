/**
 * CLASE 07
 */

// ** OBJECT.ENTRIES
const data = {
  frontend: "Pky",
  backend: "Coso",
  design: "Comue",
};

const entradas = Object.entries(data);
console.log(entradas);
// [
//   [ 'frontend', 'Pky' ],
//   [ 'backend', 'Coso' ],
//   [ 'design', 'Comue' ]
// ]
console.log(entradas.length); // 3


// ** OBJECT.VALUES
const valores = Object.values(data);
console.log(valores);
// [ 'Pky', 'Coso', 'Comue' ]
console.log(valores.length); // 3


// ** PADDING
const texto = "Soy un texto";
console.log(texto.padStart(17, "Hola "));
console.log(texto.padEnd(15, " :)"));
