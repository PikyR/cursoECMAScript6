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

// Template literal'ss
// Concatenación tradicional
const saludo1 = "Hola";
const saludo2 = "mundo";

const saludoCompleto = saludo1 + " " + saludo2;
console.log(saludoCompleto); // Hola mundo

const templateLiteral = `${saludo1} ${saludo2}`;
console.log(templateLiteral); // Hola mundo