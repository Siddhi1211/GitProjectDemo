//normal for loop
let num = 100
let sum =0
for(let i=1;i<=num;i++)
{
    sum +=i
}
console.log(sum)

//for of loop
let no:number[] = [10,20,30,40,50]
for(let element of no)
{
   if(element % 2 ==0)
   console.log("Array element: " + element)
}