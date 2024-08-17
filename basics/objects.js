//singleton
//object literals
const mysym = Symbol("key1")
const JSuser = {
    name:"Sujal",
    age :18,
    [mysym]:"KEY1",//to make it really work as symbol we should keep in sqaure bracket other it acts as string
    "fullname":"Sujal Gyawali",
    location :"Butwal",
    isloggedin :false,
    day :[1,2,3,4]
}
console.log(JSuser.name);
console.log(JSuser["name"])
//if we have to access the fullname we should use the second technique
console.log(JSuser["fullname"])
console.log(JSuser[mysym]);//while accessing as well we should use square bracket
JSuser.greeting = function(){
    console.log("Hello JS world");
    
}
console.log(JSuser.greeting());


