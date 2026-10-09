//Group by 
function groupBy(arr,keyFn){
    const result = {};

    for(let items of arr){
        const key = keyFn(items);

        if(!result[key]){
            result[key] = [];
        }
        result[key].push(items);
    }
    return result;
}
console.log(groupBy(["apple", "avocado", "banana", "cherry", "blueberry"], w => w[0]));


//Deep equal function
function deepEqual(a, b){
    if(a === b){
        return true;
    }

    //Comparing if any of the value is null 
    if(a == null || b == null || typeof a != "object" || typeof b != "object"){
        return false;
    } 

    //Comparing if both are array
    if(Array.isArray(a) !== Array.isArray(b)){
        return false;
    }

    const keyA = Object.keys(a);
    const keyB = Object.keys(b);

    //Comparing both key lenths
    if(keyA.length != keyB.length){
        return false;
    }

    //Comparing value of the keys
    for(const key of keyA){
        if(!keyB.includes(key)){
            return false;
        }
        if (!deepEqual(a[key], b[key])) return false;
    }

    return true;

}

console.log(deepEqual({ a: 1, b: [1, 2] }, { a: 1, b: [1, 2] }));
console.log(deepEqual({ a: 1 }, { a: 1, b: 2 }));
console.log(deepEqual([1, [2, 3]], [1, [2, 4]]));
console.log(deepEqual(null, {}));
console.log(deepEqual(5, 5));
