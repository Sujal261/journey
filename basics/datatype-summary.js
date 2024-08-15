//datatype on the basis of memory access is separated in two types
//primitive : String, Number , Boolean , NULL, undefined Symbol, Bigint
//reference type - arrays, objects, functions 
const id = Symbol('123')
const anotherID = Symbol('123');
console.log(id == anotherID);
const heroes = ["shaktiman","maagraj","doga"]// reference type

let myobj ={
    name : "sujal",
    age : 18
}
const myFunction = function(){ // function return function as its datatype
    console.log("Hello world");
}