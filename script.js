
// Varibales

const numberBtns = document.querySelectorAll(".num-btn");
const operationBtns = document.querySelectorAll(".operation-btn");
const equalsBtn = document.querySelector("#equals");
const deleteBtn = document.querySelector("#delete");
const clearBtn = document.querySelector("#reset");
const display = document.querySelector(".number-field")

let num1 = "";
let num2 = "";
let operator = "";

let result = "";


// Event Listeners

numberBtns.forEach(function(numBtn) {
    // let number = numBtn.dataset.number;
    numBtn.addEventListener("click", function(e){
       display.innerText += parseInt(e.target.innerText);
        
       if (operator === "") {
           num1 += parseInt(e.target.innerText);
           console.log(num1);
           
       } else {
           
           num2 += parseInt(e.target.innerText);
           console.log(num2);
        }
    })
})

operationBtns.forEach(function(opBtn) {
    // opBtn.dataset.operation;
    opBtn.addEventListener("click", function(e) {
        
        if (e.target.innerText !== "=") {
            display.innerText = ""
            operator = e.target.innerText;
            console.log(operator);
            console.log(num1);
        }
            else {
                if (operator == "+") {
                    result = parseInt(num1) + parseInt(num2);
                    display.innerText = result;
                    num1 = result;
                    num2 = 0;
                    console.log(num1, num2)
                } else if (operator == "÷") {
                    result = num1 / num2;
                    display.innerText = result
                    num1 = result;
                    num2 = 0;
                } else if (operator == "-") {
                    result = num1 - num2;
                    display.innerText = result;
                    num1 = result;
                    num2 = 0;
                } else if (operator == "x") {
                    result = num1 * num2;
                    display.innerText = result;
                    num1 = result;
                    num2 = 0;
                } 
            
            
        }
    })
})

clearBtn.addEventListener("click", function() {
    window.location.reload()

})
