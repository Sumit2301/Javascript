/*
Rest or Spread operator
So basically this operator is used for accesisng multiple values at same time 
it is like a functions with argunents
this is also known as spread operator
but it depends when it calls rest and when it calls spread
It mainly used in ecommerce website
*/
// function calculatePrice(...num)
// {
//     return num
// }
// console.log(calculatePrice(1,2,3,4,5,56,6));

//Here as we can also take variables just before the rest operator and it will take the first
//values(single value at a time) and keep the remaining for rest as rest can take many values
//`` this is backticks

function calculatePrice(val,val2,...num)
{
    return `This is value 1 of ${val},This is Value 2 of ${val2},Tand the rest elements ${num}`
}
console.log(calculatePrice(1,2,3,4,5,56,6));

//First create Object
//Then use spread operator to create new object
//Spread operator is used to create new object from existing object
//It is used to copy the values of one object to another object
//It is used to merge two objects into one object
//It is used to create new object from existing object
//But how to do this
//We can do this by using spread operator
const obj1 = {name:"Rahul",age:25}
const obj2 = {...obj1,city:"Delhi",country:"India"};
console.log(obj2);

