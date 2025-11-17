function addInt(a:number, func:Function)
{
    console.log("call back function addition: "+(a+func(10,20)))
}
addInt(10,function(a:number,b:number){
return a+b;
})

function callback(s1:string, concat:Function)
{
  console.log(s1 + "welcome")   
} 
callback("Siddhi ",function(s2:string){
    return s2
})

function call1(x:number,y:number,funcz:Function)
{
    console.log(x+y+30)
}
call1(10,20,function(z:number){
    return 10+20+z
})

function addInteger(a:number, add:Function){
	console.log(a+10+20)
}
addInteger(10,function(b:number, c:number){
	return 10+b+c;
})