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




