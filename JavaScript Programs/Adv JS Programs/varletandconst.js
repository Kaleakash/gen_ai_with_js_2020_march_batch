// This file will demonstrate the use of var, let, and const in JavaScript.
// Using var
var name = "Alice";
name = "John";      // re-assigning a new value to name
document.write("Using var: " + name); // Output: Alice 
var name = "Bob"; // var allows redeclaration
document.write("<br>Using var after redeclaration: " + name); // Output: Bob
// Using let
let age = 30;
age = 50;       // re-assigning a new value to age
document.write("<br>Using let: " + age);
//let age = 35; // This will cause an error because let does not allow redeclaration
// Using const
const pi = 3.14;
document.write("<br>Using const: " + pi);
//pi = 3.14159; // This will cause an error because const does not allow reassignment
//let id=100,name="John",age=30; // Multiple variable declaration using let
for(var i=0;i<10000;i++){
    
}
document.write("<br>Value of i after loop: " + i); // Output: 10000, var is function-scoped
for(let j=0;j<10000;j++){
    
}
//document.write("<br>Value of j after loop: " + j); // This will cause an error because let is block-scoped