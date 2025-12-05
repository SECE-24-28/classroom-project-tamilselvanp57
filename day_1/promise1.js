// promise in javascript,there are three states of promise
// 1.pending
// 2.fulfilled
// 3.rejected
// syntax

let myPromise=new Promise((resolve,reject)=>{
    let a=10;
    let b=10;
    if(a===b){
        resolve("Promise fulfilled: a is equal to b");
    }else{
        reject("Promise rejected: a is not equal to b");
    }
});

myPromise.then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message);
});
// javascript uses promises to handle asynchronous operations. It is used to handle
// the eventual completion (or failure) of an asynchronous operation and its resulting value.
// fetch function returns the promise state
console.log("Fetch API Demo:");
