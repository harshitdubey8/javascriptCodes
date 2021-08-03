/* Hoisting is the mechanism that lifts all declared variables and functions as well, to the
top of their local scope or at the top of the global scope if they are placed in the global
scope.
H OW T O P A SS
F R O NTEND ENGINEE R INTE R VIEW
www.everybodycancode.com
In Javascript, it’s possible to declare a variable after it’s used. Hoisting is used to avoid
undefined errors because otherwise, it could happen that code with variable or
function is executed, but it’s not defined.
To make sure your code won’t have any issues with undefined values, remember to
declare your variables first.
Here is an example to show you how it works. */

console.log(a);

var a;
a = 10;

sayHello();

function sayHello() {
  console.log("vaishnavi");
}

let userName = "John";

function printName() {
  console.log(userName);
  //   let userName = "Bob";
  //   console.log(userName);
}

printName();
