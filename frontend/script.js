`use strict`;

const scopeType = `Block scope, Function scope, Global scope`;

let globalVariable = `global value`;

//callback function: nem akkor fut le amikor megírjuk a függvényt, hanem akkor amikor meghívjuk.
function logVariable() {
  let functionVariable = `function value`;
  let globalVariable = `inner global variable`;
  // console.log(globalVariable);
}

// console.log(functionVariable);
logVariable();
// console.log(globalVariable);

class App {
  constructor() {
    this.method();
  }
  method() {
    //class-n belül a metódus előtt nincs function megnevezés! (láthatóság lehet! => # = privát)
    logVariable();
    //function-ba való deklarálással előtte is hívható:
    function logVariable() {
      const task = function () {
        const inner = () => {
          console.log(globalVariable);
        };
        inner(); //hoisting miatt a létrehozás (deklarálás) után kell lennie
      };
      task(); //hoisting miatt a létrehozás (deklarálás) után kell lennie
    }
  }
}

const app = new App();

window.addEventListener(`load`, onLoadEvent);

function onLoadEvent() {
  console.log(`page has been loaded`);
}

//calling order:
