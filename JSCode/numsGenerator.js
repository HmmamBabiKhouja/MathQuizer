let temp1 = generateNumber();
let temp2 = generateNumber();
let num1 = document.querySelector("#num1").innerHTML = Math.max(temp1, temp2);
let num2 = document.querySelector("#num2").innerHTML = Math.min(temp1, temp2);
let opertor = document.querySelector("#operator").innerHTML = pickOperator();

function generateNumber(){
    return Math.round(Math.random() * 50);
}

function pickOperator(){
    let opertors=["+","-",];//"*","/" add them on upper levels 
    return opertors[Math.floor(Math.random()*opertors.length)];
}

