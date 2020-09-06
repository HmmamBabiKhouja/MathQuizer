window.addEventListener("load",init);

/* vars */
const levels = {
    "unli" :{ opertors:["+","-","*","/"],maxNum :999 },
    "kg" :{ opertors:["+","-"],maxNum :5 },
    "c1" :{ opertors:["+","-"],maxNum :50 },
    "c2" :{ opertors:["+","-"],maxNum :100 }
}

let opertors = levels.unli.opertors;// default
let maxNum = levels.unli.maxNum;// default
let score = 0 ;

/* DOM vars */
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const opertor = document.querySelector("#operator");
const checkBtn = document.querySelector(".btn-input");
const result = document.querySelector("#result")
const scoreDisplay = document.querySelector(".socre-value");
scoreDisplay.innerHTML=score;
const levelSelector = document.querySelector("#levels");
levelSelector.addEventListener("change", setLevel, false);

function init(){
    let temp1 = generateNumber();
    let temp2 = generateNumber();
    num1.innerHTML= Math.max(temp1,temp2);
    num2.innerHTML= Math.min(temp1,temp2);
    opertor.innerHTML=pickOperator();
}

function generateNumber(){
    return Math.round(Math.random() * maxNum)+1;
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

function setLevel(){
    let temp = levelSelector.value;
    opertors = levels[temp].opertors;// default
    maxNum = levels[temp].maxNum;
    init();
    score = 0 ;
    scoreDisplay.innerHTML=score;
}
