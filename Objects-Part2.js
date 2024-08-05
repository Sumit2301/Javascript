// /*1. Conciseness
// Destructuring allows you to extract multiple properties at once, making the code more concise and reducing repetition.      

// Without Destructuring:
// */
// const person={               
//     name:"Sumit",
//     age:"23",
//     occupation:"Software Engineer"
// }
// //Now for calling this object this can be done by
// console.log(person.name);
// console.log(person.age);
// console.log(person.occupation);

// /*But it is not completely concise because here it is accessing single value at a time where user need to access multiple values
// So for this we can use Destructuring
// With Destructuring:
// */
// const{name,age,occupation}=person;
// console.log(name);
// console.log(age);
// console.log(occupation);

// /*
// By this way it is very easy to access
// */

// /*
// 2. Readability
// Destructuring can make code more readable by clearly indicating which properties are being extracted. This is especially useful in function parameters or when dealing with nested objects.

// Without Destructuring:


// */
// function displayPerson(person) {
//     const name = person.name;
//     const age = person.age;
//     const job = person.job;
//     console.log(`Name: ${name}, Age: ${age}, Job: ${job}`);
//   }
  
//   const person_without_destructing = {
//     name: "Alice",
//     age: 25,
//     job: "Developer"
//   };
  
//   displayPerson(person_without_destructing); // "Name: Alice, Age: 25, Job: Developer"
//   //But as we can see the above code is not completely readable 
//   //Because here it is accessing single value at a time where user need to access multiple values
//   //So for this we can use Destructuring

//   //With Destructuring:
//   //code:
//   function displayPerson({ name, age, job }) //So here it have used destructuring
//   {
//     console.log(`Name: ${name}, Age: ${age}, Job: ${job}`);
//   }
  
//   const person_with_destructuring = {
//     name: "Alice",
//     age: 25,
//     job: "Developer"
//   };
  
//   displayPerson(person_with_destructuring); // "Name: Alice, Age: 25, Job: Developer"
  
// //Here it is accessing multiple values at a time which is more readable than the previous one

// //So here it is clear that Destructuring is more readable than the previous one

// //Default values
// //Destructuring can also be used to provide default values for properties that may not exist in the object being destructured.
// //code:
// // const Anotehr_Person={
// //     name:'Jhon',
// //     age:'20',
// //     email:null
// // }
// // //now for generating the default values first need to access the variable in which the values should be saved
// // const Another_name=Anotehr_Person.name;
// // const Another_age=Anotehr_Person.age;
// // const Another_email=Anotehr_Person.email !==undefined && Anotehr_Person.email !==null ? Anotehr_Person.email : 'finding'

// // //so as it can shows that in the above code had applied default value for email
// // //first of all this is the way to apply default value
// // //and another thing is  it is like !== stands for if email is not equals to undefined (email has some value) then it will show email otherwise it will show findings
// // console.log(Another_name);
// // console.log(Another_age);
// // console.log(Another_email);

// //By destructuring

const person1={
    name1:'Jhon',
    age1:'20',
    email1:null
};
const {name1:Another_name,age1:Another_age,email1:Another_email="Addd@gmail.com"}=person1;
//Now here let us check whether the given element has value or not if not that means values need to be added
const final_email=Another_email === undefined || Another_email === null? "abbb@gmail.com" : Another_email;
//The reason to check this is because it have setted the default name but when it should appear that also needs to be setted
console.log(Another_name);
console.log(Another_age);
console.log(final_email);


