console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
setTimeout(() => console.log("5"), 10);
Promise.resolve().then(() => {
  console.log("6");
  setTimeout(() => console.log("7"), 0);
});
(async () => {
  console.log("8");
  await null;
  console.log("9");
})();
console.log("10");


//Execution Order will be
// 1,4,8,10,9,3,6,2,7,5


//Prdiction //1 will be printed 
//2 will go to the macroqueue
//3 will goes to microqueue
//5 will go the macroqueue and wait to 10sec to excuets
//As it is in promise 6 will be printed but wait in microquq and 7 will go to macroqueue and wait for 0 sec
//8 will be printed and waits till than 10 will be printed and than 9 
//as the stack become empty microqueue will be priotires so 3 and 6 will be prited 
//Now stack again become empty so macroqueue will be starts executing so 2 is printed than 5 wait for 10 sec till tha 7 will be printed and atlast 5 will be printed 