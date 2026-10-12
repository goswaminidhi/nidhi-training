// A — hoisting
console.log(a);  var a = 5;
// console.log(b);  let b = 5;          // run A1 and A2 separately
sayHi();         function sayHi() { console.log("hi"); }
// sayBye();        const sayBye = () => console.log("bye");

// B — var vs let in a loop
// for (var i = 0; i < 3; i++) setTimeout(() => console.log("var", i), 0);
// for (let j = 0; j < 3; j++) setTimeout(() => console.log("let", j), 0);

// // C — this
const user = {
  name: "Nidhi",
  regular() { return this.name; },
  arrow: () => this?.name,
  later() { setTimeout(function () { console.log("later:", this?.name); }, 0); },
  laterArrow() { setTimeout(() => console.log("laterArrow:", this.name), 0); },
};
console.log(user.regular());
console.log(user.arrow());
const detached = user.regular;
console.log(detached());            // careful, this one may throw. Why?
console.log(detached.call({ name: "Manpreet" }));
console.log(user.regular.bind({ name: "Bound" })());
user.later();
user.laterArrow();
