//Assignment1 - Reverse an array

//method 1 using slice and reverse
let array1 = [1,2,3,4,5]
for(let i=0;i<=4;i++)
{
    console.log(array1.slice(array1.length-1))
    --array1.length;
}

//method 2 
//console.log(array1.slice(0).reverse())

//...................................................
//Assignment2 - Find the occurence of an duplicate element 
let array2 = [10,20,30,40,50,60,70,30,30]
console.log("Index Of:" + array2.indexOf(30))

