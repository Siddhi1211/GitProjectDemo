let array1:number[] = [11,2,3,4,5]
//Method 1: Push()
console.log("push");
array1.push(6,7,8,9,10)
console.log(array1)

//Method 2: pop()
console.log("pop");
array1.pop()
console.log(array1)

//Method 3: unshift()
console.log("unshift");
array1.unshift(0)
console.log(array1) 

//Method 4: shift()
console.log("shift");
array1.shift()
console.log(array1) 

//Method 5: splice() //combination of push and pop splice(starting index, no of elements to be removed, elements to be added)
array1.splice(1,8,1,2,3)
console.log("splice");
console.log(array1) 

//Method 6: slice() //slice(starting index, ending index)
let newArray = array1.slice(1,4)
console.log("slice");
console.log(newArray)

//Method 7: indexOf()
console.log(array1.indexOf(3));
array1.push(10)
console.log("Array1 " + array1);
console.log(array1.indexOf(10));

//Method 8: lastIndexOf()
let array2 = [1,10,2,3,4,5,10,6,7,8,9,10,10,10]
console.log("lastIndexOf 10:");
console.log(array2.indexOf(10));
console.log(array2.lastIndexOf(10));

//Method 9: concat()
let s1 = "Siddhi "
let s2 = "Raut"
console.log("concat:");
console.log(s1.concat(s2))

//Method 10: join() join all elements of array into a string with the specified separator
console.log("join:");
console.log(array2.join("-"))

//Method 11: toString() converts array to string
console.log("toString:");
console.log(array2.toString())

//Method 12: includes() checks if an array contains a specified element
console.log("includes:");
console.log(array2.includes(55))
console.log(array2.includes(10))
console.log(array2.includes(5))

//Method 13: forEach() executes a provided function once for each array element
console.log("forEach:");
array2.forEach(function(element,index){
    console.log("Element at index " + index + " is " + element);
})
//array2.forEach((element,index) => console.log("Element at index " + index + " is " + element));

//foreach to add numbers 
let sum = 0
array2.forEach((element) => console.log(sum += element))

