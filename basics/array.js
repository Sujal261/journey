// // //array
// const myarr = [0,1,2,3]//collectipn of multiple items 
// // const  heroes =["shaktiman", "naag","sujal"]
// // console.log(myarr[0]);
// // const array = new Array(1,2,3,4)
// // console.log(myarr);
// // // methods 
// // myarr.push(6)
// // console.log(myarr);
// // myarr.pop()//thi removes the last arrat elements 
// // console.log(myarr);
// // myarr.unshift(9)//this adds the elements at first
// // myarr.shift()//this removes the first element
// // console.log(myarr.includes(3));//this gives the boolean output 

// // console.log(myarr.indexOf(3));
// // console.log(myarr.indexOf(8));// this gives -1 result because it doesnot know the index 8

// // const arr = myarr.join()
// // console.log(myarr);
// // console.log(arr);
// // console.log(typeof arr);// this binds the array and also makes it as string
// console.log("a", myarr);
// const my1 = myarr.slice(1,3)// THIS DOESNOT BRING THE CHANGE IN THE ORIGINAL ARRAY
// console.log("B", myarr);
// console.log(my1);
// const my2 = myarr.splice(1,3)// it tAKES THE LAST INDEX AS WELL //THIS BRINGS THE CHANGE IN THE ORIGINAL ARRAY
// console.log("C", myarr);
// console.log(my2);


// const people = ["sujal","saksham","prashanna","ram"] 
// const animals = ["dogs","cats","horse"]
// // people.push(animals)//this thinks animals as single data and includes in the array
// // console.log(people);
// //instead of doing this we do concat
// // console.log(people.concat(animals));//this fits the data in sinle array
// const newpeople = [...people,...animals]///remember the example of throwin the class and breakinf it when it reqches to the floor
// console.log(newpeople);


// const nestedarray = [1,2,3, [5,6,7],[7,8,9,[5,3,6]]]
// //flat makes nested array into single array
// const final = nestedarray.flat(Infinity)
// console.log(final);

// console.log(Array.isArray("Sujal"));
// console.log(Array.from("Sujal"));// this creates array out of this given thing
// console.log(Array.from({name:"Sujal"}));// this doesnot understand which word to make the array so it returns the empty array

let score1 =100
let score = 200 
let score3 = 300
console.log(Array.of(score1, score , score3));











