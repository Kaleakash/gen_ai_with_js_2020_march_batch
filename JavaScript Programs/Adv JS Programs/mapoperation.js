// create the map object and do some operations on it and display it
let myMap = new Map();
myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set('city', 'New York');
console.log(myMap);
myMap.get('name'); // John
myMap.has('age'); // true
myMap.delete('age');
console.log(myMap);
myMap.has('age'); // false  
