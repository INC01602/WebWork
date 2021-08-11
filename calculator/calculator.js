let expression = '';

var screenLower = document.getElementById("lower-display");
var screenUpper = document.getElementById("upper-display");

var buttons = document.querySelectorAll(".button");

for (button of buttons) {
    button.addEventListener('click',(e)=>{
        var buttonText = e.target.innerText;
        console.log("kk");
        
        if (buttonText == "x") {
            buttonText = "*";
            expression += buttonText;
            screenLower.value = expression;
        } else if (buttonText == "C") {
            expression = '';
            screenLower.value = "0";
            screenUpper.value = '';
        } else if (buttonText == "+ -") {
            buttonText = "-";
            expression += buttonText;
            screenLower.value = expression;
        } else if (buttonText == "=") {
            screenLower.value = eval(expression);
            screenUpper.value = expression + "=";
        } else {
            expression += buttonText;
            screenLower.value = expression;
            screenUpper.value = '';
        }
    })
}
