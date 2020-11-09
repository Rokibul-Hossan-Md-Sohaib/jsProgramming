var number = [1, 20 ,10 ,12];
var squre =[];

number.forEach(function(x){
   squre.push(x*x);
   
})
console.log (squre)


//map
var squremap =number.map(
    x=>x*x
     )
 console.log (squremap)

 //filter
 var squreFilter =number.filter(
    x=>x>10
     )
 console.log (squreFilter)