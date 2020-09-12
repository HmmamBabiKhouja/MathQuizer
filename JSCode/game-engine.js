/*TODO:
XD do the enter trigger
XD make the value text field is where the focus when the page loads or where the player win/ lose the round 
* add it to my portfolio 
*/

window.addEventListener("load",init);

/* vars */
const levels = {
    // "unli" :{ operators:["+","-","*","/"],maxNum :999 },
    "kg" :{ operators:["+","-"],maxNum :5 },
    "c1" :{ operators:["+","-"],maxNum :50 },
    "c2" :{ operators:["+","-"],maxNum :100 }
}

let operators = levels.kg.operators;// default
let maxNum = levels.kg.maxNum;// default
let score = 0 ;

/* DOM vars */
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const operator = document.querySelector("#operator");
const checkBtn = document.querySelector(".btn-input");
const result = document.querySelector("#result");
result.focus();
const scoreDisplay = document.querySelector(".score-value");
scoreDisplay.innerHTML=score;
const levelSelector = document.querySelector("#levels");
levelSelector.addEventListener("change", setLevel, false);

function init(){
    let temp1 = generateNumber();
    let temp2 = generateNumber();
    num1.innerHTML= Math.max(temp1,temp2);
    num2.innerHTML= Math.min(temp1,temp2);
    operator.innerHTML=pickOperator();
}

function generateNumber(){
    return Math.round(Math.random() * maxNum)+1;
}

function pickOperator(){
    return operators[Math.floor(Math.random()*operators.length)];
}

function enterVal(){
    checkBtn.classList.add("btn-input-clicked")
    setTimeout(()=>{checkBtn.classList.remove("btn-input-clicked")}, 400); 

    if(eval(num1.innerHTML+operator.innerHTML+num2.innerHTML)==result.value){
        score+=1;
    }else{
        score = 0;
    }
    scoreDisplay.innerHTML=score;
    init();
    result.value=""
};

function setLevel(){
    let level = levelSelector.value;
    operators = levels[level].operators;// default
    maxNum = levels[level].maxNum;
    init();
    score = 0 ;
    scoreDisplay.innerHTML=score;
}
