let str = "This is a string demo"
console.log("String demo str = " +str)
console.log(`String demo str = ${str}`)


let str1 = "This is concat demo"
console.log(str.concat(" ", str1))
console.log(str +" "+  str1)
console.log(`${str} ${str1}`)

let userName : string = "John Doe"
let password : string = "P@ssw0rd!"
console.log("Your username is: "+userName + "Your password is:" +password)
console.log(`Your username is ${userName} Your Password is ${password}`)
console.log("You username is", userName.concat("Yous password is ",password))

console.log("String lenght of the string is:" +str.length)
console.log(`String length of the string is: ${str.length}`)

console.log("Character at index 5 is: "+ str.charAt(5))
console.log(`Character at index 5 is: ${str.charAt(5)}`)


let s = "Hello World"
for(let i=s.length;i>=0;i--)
{
    console.log(s.charAt(i));
}

function addString(s1,s2)
{
    console.log("String Concatination:" + s1.concat(s2))

}
let result = addString("Type","Script")
console.log("Result from function is: "+result)

function addNumbers(x : number,y:number ,z:number) : number
{
    return x + y + z;
}
let resultnum = addNumbers(10,20,30)
console.log(`Addition is ${resultnum}`)

