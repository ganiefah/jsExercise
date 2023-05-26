// Variable
// A variable is a name of a storage location.

// Value
// Numbers, strings, booleans, objects, functions, and undefined values are all examples of values T

// Data type
// Data types describe the different types of data that we work with and storing in variables.

// Initialization
// Storing a value in a variable is called variable initialization. for eg. let const=4;

// Tell me the difference between let, var, and const.
// let:
// let allows you to declare variables that are limited to the block statement you are busy working with.
// var 
// var allows you to declare a variable globally, or locally to an entire function regardless of block scope that you are working in.

// const 
// Const allows you to declare a variable when you do not want to change the value of that variable. Once declared it will remain constant and it won't change  

// What is a variable scope?
// The scope of a variable is the part of your code in which you define it. A global variable has global scope meaning it is defined everywhere in the JavaScript code. Where as variables declared within a function are defined only within the body of that function. They are local variables and have a local scope.
// Variable scope defines the range of a program or code where a variable can be referenced.

// When can you decide when to use a for or while, forEach and do while loop?
// for loops are used through a block of code a number of times.
// for/in loops are used through the properties of an object.
// for/of loops are used through the values of an iterable object.
// while loops are used through a block of code while a specified condition is true.
// do are also loops we use through a block of code while a specified condition is true.
// You can use foreach whenever your array is associtive or has gaps.

// Define hoisting?
//hoisting
// it enables us to call functions before they appear in the code. The process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

//full name section
let fullName = {
    firstName: 'Ganiefah',
    lastName: 'Majiet',
};
console.log(fullName);
//q1 done 


//start with q2

let person = {
    firstName: 'Ganiefah',
    lastName: 'Majiet',
    age: 18,
    subjects: 'math, physics,geograpgy and biology',
}
let address = {
    streetName: 'Toner Road North',
    streetNumber: 47,
    suburb: 'Parow',
    city: 'Cape Town',
    countryName: 'South Africa'
}
console.log(person);
console.log(address);

//q2 done

//q3 start

const numb1 = document.querySelector('#numb1')
const op = document.querySelector('#operator')
const numb2 = document.querySelector('#Numb2')
const answer = document.querySelector('#result')
const button = document.querySelector('.btn')


button.addEventListener('click',()=>{
    let method = eval(numb1.value + op.value + numb2.value)

    if(numb1,op,numb2 == ''){
        numb1,op,numb2 === ''
    }else{
        answer.innerHTML = method
    }
})