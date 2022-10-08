var x = prompt("Enter a Value", "0");
var y = prompt("Enter a Value", "0");
var num1 = parseInt(x);
var num2 = parseInt(y);

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add(){
    let a= num1+num2;
     document.getElementById("sum-el").textContent  = "Sum:" + a;
     
}
function sub(){
    let b= num1-num2;
     document.getElementById("sum-el").textContent  = "Subtraction:" + b;
}
function div(){
    let c= num1/num2;
     document.getElementById("sum-el").textContent  = "Division:" + c;
}
function mul(){
    let d= num1*num2;
     document.getElementById("sum-el").textContent  = "Multiplication:" + d;
}