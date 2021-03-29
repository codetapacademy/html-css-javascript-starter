"usestrict";

//  The "use strict" Directive

//It is not a statement, but a literal expression, ignored by earlier versions of JavaScript. The purpose of "use strict" is to indicate that the code should be executed in "strict mode". With strict mode, you can not, for example, use undeclared variables.

// Short exercise.
// function returning other function.

const urare = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`); // here you console.log the parameters in a template string ????
  };
};

// //  but then to use the values inside of that function create a constant equal to that function  with a value; ???

const urareNova = urare("hey"); // hey is the function parameter (greeting);

urareNova("johnas");
// // here urareNova has another value/parameter ('johnas) ???

urare("hello")("Johnny"); // here 'hello' is the first parameter of the first function which is (greeting) and then thakes the second function with the second parameter(name);

// ///
// do it again by using an arrow function

const urare = (greeting) => (name) => console.log(`${greeting} ${name}`);

// const urare = (greeting, name) => {
//   console.log(`${greeting} and ${name}`);
// };

// ?? Don't know why it doesn't print urare with to parameters ('Buna')('Baby');??

urare("Buna")("Baby"); // ('Buna')  =   greeting  ('Baby') = name;
