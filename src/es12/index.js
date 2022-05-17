/**
 * CLASE 13
 */

// ** REPLACE ALL

const texto = "un texto loco, requete locomotora, para un loco";
const textoModificado = texto.replace("loco", "falso");

// el metodo .replace() busca y reemplaza solo la primer coincidencia
console.log(textoModificado);
// un texto falso, requete locomotora, para un loco

const nuevoTextoModificado = texto.replaceAll("loco", "NUEVO");
console.log(nuevoTextoModificado);
// un texto NUEVO, requete NUEVOmotora, para un NUEVO

// ** METODOS PRIVADOS
class Message {
  #print(val) {
    console.log(val);
  }

  get #add(val) {
    // code
  }
}

const mensaje = new Message();
mensaje.print("Hola!");
// Uncaught TypeError: mensaje.print is not a function

// ** PROMISE ANY
// Devuelve la primera promesa que se resuelva
const promesa = new Promise((resolve, reject) => reject("1"));
const promesa1 = new Promise((resolve, reject) => resolve("2"));
const promesa2 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promesa, promesa1, promesa2])
  .then(response => console.log(response))
;

// ** weakRef
class SoyUnaClase {
  constructor(element) {
    this.ref = new WeakRef(element);
  }
  /*
  {
    //code
  }
  */
}


let isTrue = true;
let isfalse = false;
let isUndef = undefined;

console.log(isTrue &&= isfalse);
console.log(isTrue ||= isfalse);
console.log(isTrue ??= isUndef);