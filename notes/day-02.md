console.log(a);  var a = 5; ----->> This gives undefined

console.log(b);  let b = 5; ----->> This gives refernece error

sayHi();         function sayHi() { console.log("hi"); } ----->> This will print hi

sayBye();        const sayBye = () => console.log("bye"); ----->>This will result in error


// B — var vs let in a loop
for (var i = 0; i < 3; i++) setTimeout(() => console.log("var", i), 0); ------>> var 0,var 1,var 2,var 3
for (let j = 0; j < 3; j++) setTimeout(() => console.log("let", j), 0);  ----->> let 0, let 1,let 2

// C — this
const user = {
  name: "Nidhi",
  regular() { return this.name; },
  arrow: () => this?.name,
  later() { setTimeout(function () { console.log("later:", this?.name); }, 0); },
  laterArrow() { setTimeout(() => console.log("laterArrow:", this.name), 0); },
};
console.log(user.regular()); --->>>> Nidhi 
console.log(user.arrow());  ----->> Nidhi
const detached = user.regular;
console.log(detached());  ----->>    undefined       // careful, this one may throw. Why?
console.log(detached.call({ name: "Manpreet" })); ------>>Manpreet
console.log(user.regular.bind({ name: "Bound" })());  ----->>Bound
user.later(); ----->>later: Nidhi
user.laterArrow(); --->>laterArrow:Nidhi






how the function is called → what this is
The function is called with the help of object. This refers to the current object function which is calling.


