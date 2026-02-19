// normal function 
display1();         // this will work because of hoisting
function display1() {
    document.write("<br/>This is a normal function");
}
display1();

//display2();         // this will not work because of hoisting
// expression style function
let display2 = function () {
    document.write("<br/>This is an expression style function");
}

display2();
// arrow function       ES6 feature
let display3 = () => {
    document.write("<br/>This is an arrow function");
}
display3();
// expression style function with 2 parameter for addition return result. 
let add1 = function(a, b) {
    return a + b;
}
document.write("<br/>Addition of 10 and 20 is: " + add1(10, 20));
// arrow function with addition of 2 numbers with implicit return.
let add2 = (a, b) => a + b;
document.write("<br/>Addition of 30 and 40 is: " + add2(30, 40));
// callback function 
function greet(name,callback){
    return "Welcome "+callback(name);
}
let maleInfo = function(name){
    return "Mr. "+name;
}
let femaleInfo = (name)=>"Ms. "+name;

document.write("<br/>"+greet("John", maleInfo));
    document.write("<br/>"+greet("Jane", femaleInfo));
document.write("<br/>"+greet("Doe",  function(name){
    return "Mr. "+name;
}))
document.write("<br/>"+greet("Smith",  (name)=>"Ms. "+name));