const fn = function makeCounter(start){
    let count = start;
    function increment(){
        return count++;
    }

    function decrement(){
        return count--;
    }

    function reset(){
        count = 0;
        return count;
    }

    function value(){
        return count;
    }

    return{
        increment,
        decrement,
        reset,
        value
    };
}

const a = fn(5);
a.increment();
a.increment();
a.decrement();
console.log(a.increment());
console.log(a.decrement());
console.log(a.value());
console.log(a.reset());



//Second function
function once(fn){
    let hasRun = false;
    let firstResult;

    return function(...args){

        if (!hasRun){
            firstResult = fn(...args)

            hasRun = true;
        }

        return firstResult;
    };
}

const init = once( () => {
    console.log("init!"); 
    return 42;
});
// console.log(init());
// console.log(init());



//Third function 
function memoize(fn){

    let cache = {}

    return function(...args){
        const key = JSON.stringify(args);


        //If already key is already present in the cache it will directly return the answer
        if(key in cache){
            console.log(args);
            return cache[key];
        }

        //If key is not present that it will calculate it
        console.log(args);
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}


const slowSquare = n => { console.log("computing", n); return n * n; };
const fastSquare = memoize(slowSquare);
fastSquare(4); fastSquare(4);





