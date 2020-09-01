window.addEventListener("load",init);

const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const opertor = document.querySelector("#operator");
const checkBtn = document.querySelector(".btn-input");
const result = document.querySelector("#result")

function init(){
    let temp1 = generateNumber();
    let temp2 = generateNumber();
    num1.innerHTML= Math.max(temp1,temp2);
    num2.innerHTML= Math.min(temp1,temp2);
    opertor.innerHTML=pickOperator();
}


function generateNumber(){
    return Math.round(Math.random() * 49)+1;
}

function pickOperator(){
    let opertors=["+","-",];//"*","/" add them on upper levels 
    return opertors[Math.floor(Math.random()*opertors.length)];
}

checkBtn.addEventListener("click",()=>{
    if(eval(num1.innerHTML+opertor.innerHTML+num2.innerHTML)==result.value){
        init();
        result.value=""
    }
});
