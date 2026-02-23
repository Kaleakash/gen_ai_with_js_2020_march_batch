// ES5 style promise object and handle 
var obj = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject("Promise rejected");
    }, 1000);
    setTimeout(function() {
        resolve("Promise resolved successfully");
    }, 1000);

});

// to handle promise in ES5 style
obj.then(function(result) {
    console.log("In Then " + result);
}).catch(function(error) {
    console.log("In Catch " + error);
});
console.log("This will be printed before the promise is resolved");
