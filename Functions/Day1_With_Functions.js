/*
functions are the pacakages in which whole code can be written for reuse
this can by used by function keyword
it has part
function declaration
function operation
function calling
*/
/*function addtwonumbers(number1,number2)
{
    let sum=number1+number2;
    console.log(`${number1+number2}`)
    return sum;

}
addtwonumbers("10",30);
*/
//So here as it shown in Basics it will count the string if it passed in double inverted commas
/*
Returning is an important part of function like it just returns 
the value of the function and it can be used in other functions
But why we returns the function?
Because it can be used in other functions and it can be used in other places
Do we use return value again>
Yes we can use it again
how lets do one program to understand

*/

// function addtwonumbers(number1,number2)
// {
//     let sum=number1+number2;
//     console.log(sum);
//     return sum;
//     }
//     let sum=addtwonumbers(10,30);
//     console.log(sum);

    //Here we can see that the value of sum is 40
    //So here we can see that the value of sum is 40
    //Where we can use this and how
    //We can use this in other functions and we can use this in other places
    //Lets do practical
    //How to recall that value show me
    //We can recall that value by using return keyword

    function addtwonumbers(number1, number2) {
        let sum = number1 + number2;
        console.log(sum);  // This prints the sum when the function is called
        return sum;        // This returns the sum to be used outside the function
    }
    
    let sum = addtwonumbers(10, 30);  // Call the function and store the result in `sum`
    console.log(sum);                 // Print the returned value (40)
    
    // Example of using the returned value in another function
    function multiplyByTwo(number) {
        return number * 2;
    }
    
    let result = multiplyByTwo(sum);  // Use the returned value `sum` (which is 40) and multiply it by 2
    console.log(result);              // Print the result (80)

// And remmeber one thing taht after return it wont print any operation