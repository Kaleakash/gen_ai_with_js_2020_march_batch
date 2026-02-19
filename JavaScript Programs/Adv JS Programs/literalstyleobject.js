// creating product object in literal style
let product1 = {
    name: "Laptop",
    price: 999.99,
    brand: "Dell",
    model: "XPS 13"
};
document.write("Product Name: " + product1.name + "<br>");
document.write("Price: $" + product1.price + "<br>");
document.write("Brand: " + product1.brand + "<br>");
document.write("Model: " + product1.model + "<br>");
let product2={
    name:"Smartphone",
    price:499.99,
    brand:"Samsung",
    model:"Galaxy S21"
}
let product3 = {
    name: "Headphones",
    price: 199.99,
    brand: "Sony",
    model: "WH-1000XM4"
}
let products =[product1,product2,product3];
document.write("<h2>Product List:</h2>");
products.forEach((product)=>{
    document.write("Product Name: " + product.name + "<br>");
    document.write("Price: $" + product.price + "<br>");
    document.write("Brand: " + product.brand + "<br>");
    document.write("Model: " + product.model + "<br><br>");
})