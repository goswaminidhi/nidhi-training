//ApplyTwice Function
function compute(x){
    return x * 3;
}
const result = function applyTwice(fn , x){
    return fn(fn(x));
}

console.log(result (compute,2));


//Compose function

function g(x){
    return  x * 2;
}
function f(x){
    return x + 1;
}
const result2 = function compose(f,g){
    return f(g(5));
}

console.log(result2(f,g))

//Mymap function
function compute2(x){
    for(let i = 0 ; i < x.length ; i++){
        x[i] = x[i] * x[i];
    }
    return x;
}
const arr = [1,2,3];

const result3 = function myMap(arr,fn){
    return fn(arr);
}

console.log(result3(arr,compute2));


//MyFilter Function

function compute3(x){
    const num = [];
    for(let i = 0 ; i < x.length ; i++){
        if(x[i] > 6){
          num.push(x[i]);
        }
    }
    return num;
   
}

const newArr = [5, 12, 8, 1];

const result4 = function myFilter(newArr,fn){
    return fn(newArr);
}

console.log(result4(newArr,compute3));

//MyREduce Function

function compute4(x,sum){
    for(let i = 0 ; i < x.length ; i++){
        sum += x[i];
    }
    return sum;
}

const arrNew = [1,2,3,4];

const result5 = function myReduce(arrNew,fn,initial){
    return fn(arrNew,initial);
}

console.log(result5(arrNew,compute4,0));



//myMap2 function
function compute5(x){
    
    for(let i = 0 ; i < x.length ; i++){
        x = x * 2;
    }
    return x;
}

const array = [];

const result6 = function myMap2(array,fn){
    return fn(array);
}

console.log(result6(array,compute5));

