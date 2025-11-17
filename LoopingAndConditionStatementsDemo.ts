//if - else
//switch case
// if - else nesting 
//for loop
let     age : number = 100;
if(age >= 18 && age < 60)
{
    console.log("You are adult")
}else if(age < 18) {
    console.log("You are child")
}
else if(age >= 60)
{
console.log("You are senior citizen")
}
else console.log("Invalid input")

//switch case

let browser : string = "Chrome"
switch(browser)
{
    case "Chrome": console.log("You are using Chrome browser")
    break;
    case "Firefox": console.log("You are using Firefox browser")
    break;
    case "Edge": console.log("You are using Edge browser")
    break;
    default: console.log("Unknown browser") 
}

//for loop star pattern
for(let i=1;i<=10;i++)
{
    i+=1;
    console.log(i)
}
for(let i=1;i<7;i++)
{
    for(let j=1;j<i;j++)
    {
         process.stdout.write("* ");
    }  
    console.log();
}

//for loop pyramid pattern
let rows: number = 5;
for
(let i=1;i<=rows;i++)
{
    for(let space=1;space<=(rows-i);space++)
    {
        process.stdout.write("  ");
    }
    for(let star=1;star<=(2*i-1);star++)
    {
        process.stdout.write("* ");
    }
    console.log();
}

//reverse string using for loop
let st1: string = "Hello World"
let reversedStr: string = ""
for(let i=st1.length -1;i>=0;i--)
{
    reversedStr  += st1.charAt(i)
}
console.log("Reversed string is: "+reversedStr)
console.log(`Reversed string is: ${reversedStr}`)

//while loop factorial 
let no: number = 5;
let fn = 0;
let sn = 1;
while(no >=0)
{
    let fib = fn + sn;
    fn = sn;
    sn= fib;
    console.log(fib)
    no--;
}

//while pallendrome program

let num = 151
let num1 = 151
let rev = 0
while(num!=0)
{
    let ld = num %10 //1
    rev = rev*10+ld //151
    num = Math.floor(num/10) //15 1 0
}
console.log("Reversed number is: "+rev)
if( num1 === rev)
{
    console.log("Pallendrome number")
}
else 
    console.log("Not a pallendrome number")

//for loop for factorial program
let number: number = 5;
let factorial: number = 1;
for(let i=1;i<=number;i++)
{
    factorial = factorial * i;

}
console.log("Factorial of "+number+" is: "+factorial);
