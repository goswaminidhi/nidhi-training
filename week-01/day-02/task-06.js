const delay = (ms) => new Promise((resolve) => setTimeout(resolve,ms));


//retry Function
async function retry(fn, attempts, delayMs){
    let latestError;
    for(let i = 0; i < attempts; i++){
        try{
            return await fn();
        }catch(error){
            latestError = error;
            if(i < attempts - 1) await delay(delayMs);
        }
    }
    throw latestError;
}

//With Timeout function
function withTimeout(promise, ms){
    let timer;
    const  timeout = new Promise((_, reject) => {
        timer = setTimeout(() => reject(new Error("Time out")),ms);
    });
    return Promise.race([promise,timeout]).finally(() => clearTimeout(timer) );
}


let calls = 0;
const flaky = async () => { calls++; if (calls < 3) throw new Error("fail " + calls); return "ok"; };
console.log(await retry(flaky, 5, 200));              // "ok"  (calls === 3)
calls = 0; 
console.log(await retry(flaky, 2, 200));   // rejects with "fail 2"
console.log(await withTimeout(delay(100), 500));      // resolves
console.log(await withTimeout(delay(1000), 500));     // rejects "Timed out"