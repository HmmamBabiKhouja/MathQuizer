/*FIX:
 D don't take the result value if it's empty 
 D redo evaluation of each level
 */

window.addEventListener("load", init);

/* vars */
const levels = {
    "kg": {
        0: {
            operators: ["+", "-"],
            maxNum: 5
        }
    },
    "c1": {
        0: {
            operators: ["+", "-", "*"],
            maxNum: 25
        }
    },
    "c2": {
        0: {
            operators: ["+", "-"],
            maxNum: 100
        },
        1: {
            operators: ["*", "/"],
            maxNum: 10
        }
    }
}

let level = levels.kg;
let operators = level[0].operators; // default
let maxNum = level[0].maxNum; // default
let score = 0;

/* DOM vars */
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const operator = document.querySelector("#operator");
const checkBtn = document.querySelector(".btn-input");
const result = document.querySelector("#result");
result.focus();
const scoreDisplay = document.querySelector(".score-value");
scoreDisplay.innerHTML = score;
const levelSelector = document.querySelector("#levels");
levelSelector.addEventListener("change", setLevel, false);

function init() {
    let levelsTypes = Object.keys(level).length;
    let levelType = Math.floor(Math.random() * levelsTypes);
    console.log(level[levelType]);
    operators = level[levelType].operators;
    maxNum = level[levelType].maxNum;

    let temp1 = generateNumber();
    let temp2 = generateNumber();
    num1.innerHTML = Math.max(temp1, temp2);
    num2.innerHTML = Math.min(temp1, temp2);
    operator.innerHTML = pickOperator();
}

function generateNumber() {
    return Math.round(Math.random() * maxNum) + 1;
}

function pickOperator() {
    return operators[Math.floor(Math.random() * operators.length)];
}

function enterVal() {
    checkBtn.classList.add("btn-input-clicked")
    setTimeout(() => {
        checkBtn.classList.remove("btn-input-clicked")
    }, 400);
    if (result.value === null || result.value === "") {
        alert("Enter the result of the equation instead of the ? before you hit check")
    } else {
        if (eval(num1.innerHTML + operator.innerHTML + num2.innerHTML) == result.value) {
            score += 1;
        } else {
            score = 0;
        }
        scoreDisplay.innerHTML = score;
        init();
        result.value = ""
    }

};

function setLevel() {
    level = levels[levelSelector.value];
    init();
    score = 0;
    scoreDisplay.innerHTML = score;
}