let i = 0;
var obj;
function Task() {
    obj = setInterval(()=> {
        let date = new Date();
        document.getElementById("result").innerHTML = i;
        document.getElementById("currentdataandtime").innerHTML = date.toISOString();
        //document.write(i);

        if(i%2==0){
            document.getElementsByTagName("body")[0].style.backgroundColor = "lightblue";
            document.getElementsByTagName("h2")[0].style.color = "red";
        } else {
            document.getElementsByTagName("body")[0].style.backgroundColor = "lightcoral";  
            document.getElementsByTagName("h2")[0].style.color = "green";
        }
        
        i++;
    },1000)
}
function StopTask() {
    clearInterval(obj);
}