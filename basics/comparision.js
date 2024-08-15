console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// the output is false false and last one is true
//this is because an equality check == and comaprision operatore work differently ><>=
//comparision operator convert null to a m=number treating it as 0 that
// why null>=o is trua and null>0 is false
console.log(undefined > 0);
console.log(undefined  == 0);
console.log(undefined  < 0);
// === =>it checks the datatype and value whike checking