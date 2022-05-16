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
/* FIN DE CLASE 07 */

/**
 * CLASE 08
 */
// ** ASYNC - AWAIT 

const nuevaFuncion = () => {
  return new Promise((resolve, reject) => {
    // if ternario
    (true)
      ? setTimeout (() => resolve("Hola asincronismo!"), 2000)
      : reject(new Error("Test error!"))
  })
};

const helloAsync = async () => {
  const saludo = await nuevaFuncion();
  console.log(saludo);
}

helloAsync();


const otraFuncion = async () => {
  try {
    const hello = await nuevaFuncion();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

otraFuncion();