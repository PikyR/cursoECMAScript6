/**
 * CLASE 11
 */

const button = document.getElementById("btn");

button.addEventListener("click", async function() {
  const module = await import("./file.js");
  module.helloWorld();
});

/* FIN DE CLASE 11 */

/**
 * CLASE 12
 */
// ** BIGINT

const bigNum = 9007199254740991n;
const otroBigNum = BigInt(9007199254740991);
console.log(bigNum);
console.log(otroBigNum);

// ** allSettled()
const promise1 = new Promise((resolve, reject) => reject("Rechazado"));
const promise2 = new Promise((resolve, reject) => resolve("Resuelto"));
const promise3 = new Promise((resolve, reject) => resolve("Otro resuelto"));

Promise.allSettled([ promise1, promise2, promise3 ])
  .then(response => console.log(response))
;
// [
//   { status: 'rejected', reason: 'Rechazado' },
//   { status: 'fulfilled', value: 'Resuelto' },
//   { status: 'fulfilled', value: 'Otro resuelto' }
// ]

// ** GLOBAL THIS
console.log(window); // ReferenceError: window is not defined | /!\ ERROR EN NODE /!\
console.log(globalThis);
/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 42.9507999997586,
      nodeStart: 0.15620000008493662,
      v8Start: 1.281499999575317,
      bootstrapComplete: 31.842000000178814,
      environment: 16.883399999700487,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1652797937750.443
  },
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
}
*/

// ** 
const foo = null ?? "Defaul text";
console.log(foo);

// **
const user = {};
// console.log(user?.profile?.email);

if (user?.profile?.email) {
  console.log("email"); 
} else {
  console.log("ERROR");
}