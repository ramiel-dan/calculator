// operation button functions
async function operationButtonFunctions() {
    document.getElementById("operation-division").addEventListener("click", function() {
        document.getElementById("calculator-screen").value += "/";
    })
    document.getElementById("operation-multiplication").addEventListener("click", function() {
        document.getElementById("calculator-screen").value += "*";
    })
    document.getElementById("operation-subtraction").addEventListener("click", function() {
        document.getElementById("calculator-screen").value += "-";
    })
    document.getElementById("operation-addition").addEventListener("click", function() {
        document.getElementById("calculator-screen").value += "+";
    })
}
// number button functions
async function numberButtonFunctions() {
    document.getElementById("number-nine").addEventListener("click", function() {
        document.getElementById("calculator-screen").value += "9";
    })
    document.getElementById("number-eight").addEventListener("click", function() {
        document.getElementById("calculator-screen").value += "8";
    })
    document.getElementById("number-seven").addEventListener("click", function() {
        document.getElementById("calculator-screen").value += "7";
    })
    document.getElementById("number-six").addEventListener("click", function() {
        document.getElementById("calculator-screen").value += "6";
    })
    document.getElementById("number-five").addEventListener("click", function() {
        document.getElementById("calculator-screen").value += "5";
    })
    document.getElementById("number-four").addEventListener("click", function() {
        document.getElementById("calculator-screen").value += "4";
    })
    document.getElementById("number-three").addEventListener("click", function() {
        document.getElementById("calculator-screen").value += "3";
    })
    document.getElementById("number-two").addEventListener("click", function() {
        document.getElementById("calculator-screen").value += "2";
    })
    document.getElementById("number-one").addEventListener("click", function() {
        document.getElementById("calculator-screen").value += "1";
    })
    document.getElementById("number-zero").addEventListener("click", function() {
        document.getElementById("calculator-screen").value += "0";
    })
    document.getElementById("button-point").addEventListener("click", function() {
        document.getElementById("calculator-screen").value += ".";
    })
    document.getElementById("button-reset").addEventListener("click", function() {
        document.getElementById("calculator-screen").value = "";
    })
}
// equals button functions
async function equalsButtonFunctions() {
    document.getElementById("button-del").addEventListener("click", function() {
        document.getElementById("calculator-screen").value = document.getElementById("calculator-screen").value.slice(0, -1);
    })
    document.getElementById("button-equals").addEventListener("click", function() {
        document.getElementById("calculator-screen").value = calculate();
    })
}

function calculate() {
    let result = 0;
    // the eval function is used to evaluate the string expression in the calculator screen
    // return the result of the evaluation by inserting the storing it in an empty variable (result)
    result = eval(document.getElementById("calculator-screen").value);

    if (document.getElementById("calculator-screen").value == null || document.getElementById("calculator-screen").value == "") {
        return "undefined";
    }
    return result;
}

operationButtonFunctions();
numberButtonFunctions();
equalsButtonFunctions();