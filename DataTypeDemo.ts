//Datatypes - Two types:
//1] Primitive Data Types
//1.Number - is a combination of int and float no
//2.String
//3.Boolean 
//4.Null
//5.Undefined
//No 1 to 5 are same in JavaScript and TypeScript.

//6.any
//7.union
//8. void - function with no return type

//2] Non-Primitive Data Types - These are objects
//1.Array
//2.Object
//3.Function
//4.String

let num:number = 30 //explicitly defined a data type
let num1 = 34.5 //Taking default data type as number

//typeof - which helps om terms of identify the data type of variable
console.log("Value of num is "+num+" and its type is "+typeof(num))
console.log("Value of num1 is "+num1+" and its type is "+typeof(num1))


let singleQuote = 'Demo Text singleQuote'
let doubleQuote = "Demo Text doubleQuote"
let multiLine = `This is a 
demo for a multi line string`

let age = 35
let message = `Your age is: ${age}` 
console.log(message) //Wrong way

// 3]Boolean - true or false
let isLoggedIn:boolean = true 
console.log("Value of isLoggedIn is "+isLoggedIn+" and its type is "+typeof(isLoggedIn))


//4. Null : Intentional absense of value
let apiResponseNull:string | null = null
apiResponseNull = "apiCall()"

//5. Undefined : Default value assigned to a variable which is not initialized 
//6. any : variable which can hold any data type and it is bydefault
//  assigned to a variable if no data type is defined. 
// any type of data can be assigned to this variable 
let a : any = 10
a = "Test String"
a = true
a = null
a = undefined
console.log("Value of a is "+a+" and its type is "+typeof(a))


function add(a1:number,b1:number)
{
    let c1 = a1 + b1
    console.log("Addition function"+c1)
}
add(20,30);
