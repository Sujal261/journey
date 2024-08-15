let number = 33
console.log(typeof number);
let number1 = "33"
console.log(typeof number1);
//we can convert this to number by the following step 
let valueInNumber = Number(number1)// this line converts string to number
console.log(typeof valueInNumber)
 
let number3 ="33abc";
let num = Number(number3);
console.log(typeof num)
console.log(num)
/*
though it gives the type of number3 as number value it returns is Nan
*/
let number4 = null ;
let num1 = Number(number4);
console.log(typeof num1)
console.log(num1)//it gives the value 0
//it there is boolean value then it return either 1 or 0 
//for boolean
let b = 1
let convert = Boolean(b)
console.log(convert);
// 1 => true
// 0 =>false
// string=> true

