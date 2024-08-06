//Date is one of the data type of Javascript
//Date is used to store the date and time
//Date is a built-in object in Javascript
//Date is a constructor function
//Date is a class in Javascript
// let dte=new Date();
// console.log(dte);
// console.log(dte.toDateString());
// console.log(dte.toTimeString());

// let dte2=new Date('2000','12','4');
// console.log(dte2.toDateString());

//Now lets understand the time difference and how to calculate it
//We will use the Date object to calculate the time difference
// let onedte=Date.now();
// console.log(onedte);
// //Now lets create another date object
// let twodte=new Date("2000-12-3");
// console.log(twodte.toISOString());  

// //Now need to calculate the time difference and print in hours
// //We will use the Date object to calculate the time difference
// redte=onedte-twodte;
// console.log((redte/1000/60/60/24));

// console.log(twodte.toLocaleDateString('DEL',{
//     weekday:'long',
//     year:'numeric',
//     month:'long',
//     day:'numeric'
// }));
//what are you doing 
//This is for commiting

lte=new Array(1,2,3,4,5,56,67,7);
let lte2=lte;
console.log(lte2);
lte2[2]=340;
console.log(lte2);
console.log(lte);
//Here it gets understood two concepts the logic of shallow copy ,deep copy and also the stack and heap
//stack=In this premetive data types stores the memory and it shares original reference with the second variable
//heap=In this non premetive data types stores the memory and it shares original reference with the second variable
//shallow copy=arrays follows shallow copies which shares the memory editings and changes 
//deep copy=objects follows deep copies which does not share the memory editings and changes
//Create the list of all array methods with complete information
//push=It will add the element in the last
//pop=It will remove the element from the last
//shift=It will remove the element from the first

//unshift=It will add the element in the first
//splice=It will remove the element from the middle
//slice=It will copy the element from the middle
//concat=It will copy the element from the middle
//reverse=It will reverse the array
//sort=It will sort the array
//join=It will join the array elements with the given string
//filter=It will filter the array elements with the given condition
//map=It will map the array elements with the given condition
//reduce=It will reduce the array elements with the given condition
//forEach=It will iterate the array elements with the given condition




//Can we give the index in pop or shift
//Yes we can give the index in pop or shift
//Can we give the index in unshift or splice
//Yes we can give the index in unshift or splice

//what is the difference between pop and shift
//pop will remove the element from the last and shift will remove the element from the first

let mystr=lte2.join();
console.log(mystr);