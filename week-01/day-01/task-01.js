// console.log("5" + 3);
// console.log("5" - 3);
// console.log("5" * "2");
// console.log(7 / 2);
// console.log(0.1 + 0.2 === 0.3);
// console.log(10 / 0 )
// console.log(NaN === NaN)
// console.log(typeof NaN); 
// console.log(null == undefined)
// console.log(null === undefined);
// console.log("" == 0 );
// console.log([1, 2] == "1,2" );
// console.log(typeof null);
// console.log(typeof function () {});
// console.log(Boolean("0"), Boolean(""), Boolean([]) );
// let x; console.log(x);


function isValidNumber(value){
    return Number.isFinite(value);
}

console.log(isValidNumber(Infinity));