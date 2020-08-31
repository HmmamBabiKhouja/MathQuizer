let tempNum1 = generateNumber();
let tempNum2 = generateNumber();
let tempOp =  pickOperator();
let num1 = document.querySelector("#num1").innerHTML = Math.max(tempNum1, tempNum2);
let num2 = document.querySelector("#num2").innerHTML = Math.min(tempNum1, tempNum2);
let opertor = document.querySelector("#operator").innerHTML = tempOp;
let checkBtn = document.querySelector(".btn-input");

function generateNumber(){
    return Math.round(Math.random() * 49)+1;
}

function pickOperator(){
    let opertors=["+","-",];//"*","/" add them on upper levels 
    return opertors[Math.floor(Math.random()*opertors.length)];
}

checkBtn.addEventListener("click",()=>{
    let resultValue = document.querySelector("#result").value;
    alert(eval(tempNum1+opertor+tempNum2)==resultValue);
});


