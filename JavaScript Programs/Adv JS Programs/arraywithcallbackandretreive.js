let num1=[1,2,3,4,5,6,7,8,9,10]
document.write("<br/> "+num1)
document.write("<br/> Display element one by one using for loop <br/>")
for(let i=4;i<8;i++){
    document.write(num1[i]+"<br/>")
}
document.write("<br/> Display element one by one using for in  loop <br/>")
for(let index in num1){
    document.write("index "+index+" Value "+num1[index]+"<br/>")
}   
document.write("<br/> Display element one by one using for of  loop <br/>")
for(let value of num1){
    document.write("Value "+value+"<br/>")
}
document.write("<br/> Display element one by one using for each function <br/>")
num1.forEach(function(value,index){
    document.write("index "+index+" Value "+value+"<br/>")
})  
document.write("<br/> Display element one by one using for each function with arrow function <br/>")
num1.forEach(value=>document.write("Value "+value+"<br/>"))
num1.forEach((value,index)=>document.write("index "+index+" Value "+value+"<br/>"))



num1.filter(value=>value%2==0).forEach(value=>document.write("Even Value "+value+"<br/>"))
num1.map(value=>value+value).forEach(value=>document.write("Square Value "+value+"<br/>"))


