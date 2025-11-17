//default parameters
function def(p1:string, p2:number = 45)
{

    console.log(p1,p2)
    console.log(typeof p1)
}
def("Siddhi") // siddhi 45
def("Gouravi", 30) //Gouravi 30
def(10) // 10 45
def() //undefined 45
function def1(p1=`Ram`, p2:number = 45)
{

    console.log(p1,p2)
    console.log(typeof p1)
}
def1("Siddhi") // siddhi 45
def1("Gouravi", 30) //Gouravi 30
def1(10) // 10 45
def1() //Ram 45
console.log("---------------------------------------------------")
//optional parameters
function optionalparam(op1:string = "ABC", op2?:number)
{
    console.log(op1, op2)   
}

optionalparam("Siddhi", 25) // Siddhi 25
optionalparam("Gouravi") // Gouravi undefined
optionalparam() // ABC undefined        
optionalparam("", 30) //  30
optionalparam(undefined,50)// ABC 50
console.log("---------------------------------------------------")
//function overloading
//function overloading means same function name with different parameters
//in type script function overloading is achieved by writing multiple function type definitions
//followed by single function implementation
function addition(s:string, t:string):string
function addition(s:number, t:number):number
function addition(s:any, t:any):any
function addition(s:number, t:number):number
{
    console.log("function overloading")
    return s+t
}
console.log(addition(10,20)) //30
console.log(addition("Hello ","World")) // Hello World      
//console.log(addition(10,"World")) // error
//console.log(addition("Hello",20)) // error

console.log("---------------------------------------------------")
//function overloading with different number of parameters
function concat(a:string, b:string):string      
function concat(a:string, b:string, c:string):string
function concat(a:string, b:string, c?:string):string
{
    if(c)
    {
        return a+b+c
    }       
    else
    {
        return a+b
    }
}   
console.log(concat("Hello ","World")) // Hello World
console.log(concat("Hello ","Beautiful ","World")) // Hello Beautiful World
//console.log(concat("Hello ")) // error        
console.log("---------------------------------------------------")

function disp():string
function disp(d1:string):string
function disp(d1:string, d2:string):string
{
    if(d2)
    {
        return d1+d2;
    }
    else if(d1)
    {       
        return d1;
    }   
    else
    {
        return "no param" 
    
    }
}
console.log(disp())
console.log(disp(10))
console.log(disp("Siddhi"))
console.log(disp("Siddhi","Gouravi"))    
