// create set object and add some values to it and display it 
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2); // duplicate value, will not be added
console.log(mySet);
mySet.has(2); // true
mySet.delete(2);
console.log(mySet);
mySet.has(2); // false