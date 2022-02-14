function sayHelloTo(user = "Dear User") {
  const msg = "Hello, " + user + "!";

  return function () {
    console.log(msg);
  }
}

const sayHelloToLena = sayHelloTo("Lena");
sayHelloToLena();
const sayHelloToIgor = sayHelloTo("Igor");
sayHelloToIgor();

(sayHelloTo())();

function sayHello(hiStr = "Hello") {
  return function(user = "Dear User") {
    console.log(`${hiStr}, ${user}!`);
  }
}

const sayPrivet = sayHello("Привет");
sayPrivet("Лена");
sayPrivet("Игорь");
const sayHi = sayHello("Hi");
sayHi("Lena");
sayHi("Igor");


sayHello("Alloha")("Sancho");
