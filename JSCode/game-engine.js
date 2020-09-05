window.addEventListener("load",init);

/* vars */
let score = 0 ;
let opertors=["+","-",];//"*","/" add them on upper levels 

/* DOM vars */
const levelPicker = document.querySelector(".level-picker");
const navList = document.querySelector(".nav-list")
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const opertor = document.querySelector("#operator");
const checkBtn = document.querySelector(".btn-input");
const result = document.querySelector("#result")
const scoreDisplay = document.querySelector(".socre-value");
scoreDisplay.innerHTML=score;

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
    return opertors[Math.floor(Math.random()*opertors.length)];
}

checkBtn.addEventListener("click",()=>{
    checkBtn.classList.add("btn-input-clicked")
    setTimeout(()=>{checkBtn.classList.remove("btn-input-clicked")}, 400); 

    if(eval(num1.innerHTML+opertor.innerHTML+num2.innerHTML)==result.value){
        score+=1;
    }else{
        score = 0;
    }
    scoreDisplay.innerHTML=score;
    init();
    result.value=""
});

levelPicker.addEventListener("click",()=>{
    levelPicker.classList.add("level-picker-clicked")
    setTimeout(()=>{levelPicker.classList.remove("level-picker-clicked")}, 400); 

    navList.classList.toggle("nav-list-active");
});