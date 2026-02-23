let URL = "https://dummyjson.com/products";

//fetch(URL).then(result=>console.log(result)).catch(error=>console.log(error)); // it return a promise object including headers, status, statusText, url, type, bodyUsed

// fetch(URL).
// then(response=>response.json()).
// then(result=>{
//     // display promise result on browser with DOM manipulation
//     let productList = document.getElementById("product-list");
//     // apply styling using flex layout to display products in a grid format
//     productList.style.display = "flex";
//     productList.style.flexWrap = "wrap";
//     productList.style.gap = "20px"; 
//     let html = "<ul>";
//     result.products.forEach(product => {
//         // display product title, price and images on browser
//         html += `<li style="list-style: none; margin-bottom: 10px;">${product.title} - ${product.price} <img src="${product.images[0]}" alt="${product.title}" width="50"></li>`;
        
//     });
//     html += "</ul>";
//     productList.innerHTML = html;
// }).
// catch(error=>console.log(error)); 
// console.log("This code execute independently of the fetch call");


// handle rest api using fetch with async await
async function fetchProducts() {
        // await keyword is used to wait for the promise to resolve and return the result, it can only be used inside an async function
        // converting async code to sync code using async await makes it more readable and easier to understand, it also helps to handle errors using try catch block
        try{
        let response = await fetch(URL);    // replacement of then()
        console.log(response); // it return a promise object including headers, status, statusText, url, type, bodyUsed
        let result = await response.json(); // replacement of then()
        console.log(result); // it return the actual data from the api
        let productList = document.getElementById("product-list");
        // apply styling using flex layout to display products in a grid format
        productList.style.display = "flex";
        productList.style.flexWrap = "wrap";
        productList.style.gap = "20px";
        let html = "<ul>";
        result.products.forEach(product => {
            // display product title, price and images on browser
            html += `<li style="list-style: none; margin-bottom: 10px;">${product.title} - ${product.price} <img src="${product.images[0]}" alt="${product.title}" width="50"></li>`;
        });
        html += "</ul>";
        productList.innerHTML = html;
    } catch (error) {
        console.log(error);
    }
}
fetchProducts();