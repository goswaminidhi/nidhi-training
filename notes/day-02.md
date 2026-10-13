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






->how the function is called → what this is
The function is called with the help of object. This refers to the current object function which is calling.




JAVA vs JS
1. In java we define the variable data type but in js we don't do it. we noramally define them using var,let,const.
2. In java we use this keyword is fixed to the object the method belong to but in js it is not fixed, it is decided by the how the function is called
3. In java private keyword is used to declare the private feild but in js # IS used to declare private.
4. Java is multi-threaded and Js is single threded but the environment(web browser and node.js) provide the multi-threaded cababilities.
5. In Java to declare the constructor we use class name but in js we use the constructor() to define it


