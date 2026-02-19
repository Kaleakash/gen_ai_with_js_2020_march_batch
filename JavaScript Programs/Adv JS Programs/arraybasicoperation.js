// // array object creation in literal style 
// let num1=[];    
// // array object creation in constructor style using new operator
// let num2=new Array();

// let num3 = [1,2,3,4,5]; // array object creation in literal style with initialization
// let num4 = new Array(1,2,3,4,5); // array object creation in constructor style with initialization
// document.write(num1.length+"<br>"); // empty array
// document.write(num3.length+"<br>"); // array with 5 elements
// document.write(num3+"<br>"); // array with 5 elements
// document.write(num3.join(" ")+"<br>"); // 1 2 3 4 5
// document.write(num3[0]+"<br>"); // 1
// document.write(num3[4]+"<br>"); // 5
// num1.push(10); // add 10 to the end of the array
// num1.push(20);
// num1.push(30);
// num1.unshift(40); // add 40 to the beginning of the array
// num1.unshift(50); // add 50 to the beginning of the array
// document.write(num1+"<br>"); // 50,40,10,20,30
// num1.pop(); // remove the last element of the array
// num1.shift(); // remove the first element of the array
// document.write(num1+"<br>"); // 40,10,20

// adding elements to the array in between and remove elements in between
let num1=[10,20,30,40,50];
document.write(num1+"<br>"); // 10,20,30,40,50
// 1st parameter index position 
// 2nd parameter number of element to remove 
// 3rd, 4th, 5th parameter element to add in the array
//num1.splice(1,1);   // remove 1 element from index position 1
//num1.splice(1,3);   // remove 3 element from index position 1
//num1.splice(1,0,100)
//num1.splice(1,1,200); // remove 1 element from index position 1 and add 200 in the array
num1.splice(1,2,300,400); // remove 2 element from index position 1 and add 300,400 in the array
document.write(num1+"<br>"); 
