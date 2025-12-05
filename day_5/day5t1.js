function demo(){
    console.log("Hello World");
}
demo()
let samp=()=>
{
    console.log("Arrow Function");
}
let samp2=()=>console.log("Arrow Function 2"); // as single line no need of {} and return keyword
samp()
samp2()
let arr=["arun","vijay","sara"]
let [a,b,c]=arr; // destructuring assignment
console.log(a);
console.log(b);
console.log(c);
// destructuring with objects
let obj={
    name:"arun",
    age:22,
    city:"chennai"
}
let {name,age,city}=obj;
console.log(name);
console.log(age);
console.log(city);
// giving different variable names
let {name:n,age:ag,city:ct}=obj;
console.log(n);
console.log(ag);
console.log(ct);
// set interval 
console.log("Set Interval Demo:");
setInterval(()=>{
    console.log("Hello World");
},2000)
console.log("Set Timeout Demo:");
setTimeout(()=>{
    console.log("Hello World");
},2000) // it will execute only once
// callback function
console.log("Callback Function Demo:");
setTimeout(()=>{
    console.log("process 2");
    setTimeout(()=>{
        console.log("process 3");
},2000)},2000);
// console.log("process 1");
//promises
// console.log("Promise Demo:");
