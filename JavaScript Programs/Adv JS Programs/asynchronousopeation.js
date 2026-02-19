// synchronous and asynchronous operation
// synchronous operation
// console.log("1");
// console.log("2");
// console.log("3");

// asynchronous operation
console.log("1");

setTimeout(() => {
    console.log("2");
}, 2000);

setInterval(()=> {
    console.log("3");
},1000)

console.log("4");