function add(a1:number,b1:number)
{
 console.log(`Addition is: ${a1+b1}`)
 return a1+b1;
}
add(12,12);

function sub(a2:number,b2:number)
{
    console.log(`Substraction is: ${a2-b2}`);
    return a2-b2;
}
let result = sub(20,10);
console.log("Result from sub function is: "+result);

function Username(name:string):String
{
    return name;
}
console.log(Username("Siddhi"));

let undefinedVar
console.log(undefinedVar)

// why do we need the ananymous function? it is used when we want to create a function without a name. It is often used in situations where a function is used as a value, such as in callbacks or immediately invoked function expressions (IIFE).
let multiply = function(a3:number,b3:number):number
{
    return a3*b3;
}   
console.log("Multiplication is: "+multiply(5,6));
//call back function - annonymus and arrow functions are used in call back functions
// call back functions are functions that are passed as arguments to other functions and are executed after some operation is completed.
// Arrow function

let k = function()
{
    console.log("Hello from k function");
}
k()
//call back function example
function add3(a3:number,func:Function)
{
    console.log("Call back function example:");
    console.log(a3+func(10,10))
}
add3(10,function(b3:number,c3:number){
    return b3+c3;
})