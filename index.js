// stored values

var calculator = {
    number1: 0,
    number2: 0, 
    currentNumber: "",
    currentOperator: ""
};

$("#answer").text(calculator.currentNumber);

// eventListeners -- click 

$(".el").click(function () {
    var pressedValue = this.id;
    var valueOfId = $("#" + pressedValue).text();
    $("#" + pressedValue).fadeOut(50).fadeIn(50);
    
    if  ( $("#" + pressedValue).hasClass("number") === true ) {
        clicked(valueOfId);
    } 
    else if ( $("#" + pressedValue).hasClass("operator") === true ) {
        calculator.number1 = parseFloat(calculator.currentNumber);
        calculator.currentNumber = "";
        calculator.currentOperator = valueOfId;

        $("#answer").text(calculator.currentNumber);
        $("#answer2").text(calculator.currentOperator);
    }
    else if ( $("#" + pressedValue).hasClass("equalTo") === true ) {
        if ( (calculator.currentOperator === "") === false && (calculator.currentNumber === "") === false ) {
            calculator.number2 = parseFloat(calculator.currentNumber);
            calculator.currentNumber = "";
            var kindOfOperator = calculator.currentOperator;

            equals(calculator.number1, calculator.number2, kindOfOperator);
        } 
        else if ( (calculator.currentOperator === "") === false && (calculator.currentNumber === "") === true ) {
            var kindOfOperator = calculator.currentOperator;

            equals(calculator.number1, calculator.number1, kindOfOperator);
        } else {}        
    }
    else if ( $("#" + pressedValue).hasClass("clear") === true ) {
        calculator.number1 = 0;
        calculator.number2 = 0; 
        calculator.currentNumber = "";
        calculator.currentOperator = "";
        $("#answer").text(calculator.currentNumber);
        $("#answer2").text(calculator.currentOperator);
    }
});

//eventListeners -- keyPress

$(document).on("keypress", function (event) {
    var pressedValue = event.key;

    pressButton(pressedValue);
});

// functions

function clicked (value) {
    calculator.currentNumber = calculator.currentNumber + value;

    return $("#answer").text(calculator.currentNumber)
}

function equals (num1, num2, operator) {
    calculator.number1 = 0;
    calculator.number2 = 0;
    calculator.currentOperator = "";

    $("#answer2").text(calculator.currentOperator);
    
    switch (operator) {
        case operator = "+": 
            var result = num1 + num2;
            calculator.currentNumber = result.toString();
            return $("#answer").text(calculator.currentNumber)
        break;
        case operator = "-":
            var result = num1 - num2;
            calculator.currentNumber = result.toString();
            return $("#answer").text(calculator.currentNumber)
        break;
        case operator = "x":
            var result = num1 * num2;
            calculator.currentNumber = result.toString();
            return $("#answer").text(calculator.currentNumber)
        break;
        case operator = "/":
            var result = num1 / num2;
            calculator.currentNumber = result.toString();
            return $("#answer").text(calculator.currentNumber)
        break;
        default:
    }
}

function pressButton (key) {

    switch (key) {
        case "0":
            $("#zero").fadeOut(50).fadeIn(50);
            var valueOfId = $("#zero").text();
            clicked(valueOfId);
        break;
        case "1":
            $("#one").fadeOut(50).fadeIn(50);
            var valueOfId = $("#one").text();
            clicked(valueOfId);
        break;
        case "2":
            $("#two").fadeOut(50).fadeIn(50);
            var valueOfId = $("#two").text();
            clicked(valueOfId);
        break;
        case "3":
            $("#three").fadeOut(50).fadeIn(50);
            var valueOfId = $("#three").text();
            clicked(valueOfId);
        break;
        case "4":
            $("#four").fadeOut(50).fadeIn(50);
            var valueOfId = $("#four").text();
            clicked(valueOfId);
        break;
        case "5":
            $("#five").fadeOut(50).fadeIn(50);
            var valueOfId = $("#five").text();
            clicked(valueOfId);
        break;
        case "6":
            $("#six").fadeOut(50).fadeIn(50);
            var valueOfId = $("#six").text();
            clicked(valueOfId);
        break;
        case "7":
            $("#seven").fadeOut(50).fadeIn(50);
            var valueOfId = $("#seven").text();
            clicked(valueOfId);
        break;
        case "8":
            $("#eight").fadeOut(50).fadeIn(50);
            var valueOfId = $("#eight").text();
            clicked(valueOfId);
        break;
        case "9":
            $("#nine").fadeOut(50).fadeIn(50);
            var valueOfId = $("#nine").text();
            clicked(valueOfId);
        break;
        case ".":
            $("#dot").fadeOut(50).fadeIn(50);
            var valueOfId = $("#dot").text();
            clicked(valueOfId);
        break;

        case "+":
            $("#sum").fadeOut(50).fadeIn(50);
            calculator.number1 = parseFloat(calculator.currentNumber);
            calculator.currentNumber = "";
            calculator.currentOperator = "+";

            $("#answer").text(calculator.currentNumber);
            $("#answer2").text(calculator.currentOperator);
        break;
        case "-":
            $("#subtract").fadeOut(50).fadeIn(50);
            calculator.number1 = parseFloat(calculator.currentNumber);
            calculator.currentNumber = "";
            calculator.currentOperator = "-";

            $("#answer").text(calculator.currentNumber);
            $("#answer2").text(calculator.currentOperator);
        break;
        case "*":
            $("#multiply").fadeOut(50).fadeIn(50);
            calculator.number1 = parseFloat(calculator.currentNumber);
            calculator.currentNumber = "";
            calculator.currentOperator = "x";

            $("#answer").text(calculator.currentNumber);
            $("#answer2").text(calculator.currentOperator);
        break;
        case "/":
            $("#divide").fadeOut(50).fadeIn(50);
            calculator.number1 = parseFloat(calculator.currentNumber);
            calculator.currentNumber = "";
            calculator.currentOperator = "/";

            $("#answer").text(calculator.currentNumber);
            $("#answer2").text(calculator.currentOperator);
        break;

        case "Enter" || "=":
            $("#equals").fadeOut(50).fadeIn(50); 

            if ( (calculator.currentOperator === "") === false && (calculator.currentNumber === "") === false ) {
                calculator.number2 = parseFloat(calculator.currentNumber);
                calculator.currentNumber = "";
                var kindOfOperator = calculator.currentOperator;

                equals(calculator.number1, calculator.number2, kindOfOperator);
            } 
            else if ( (calculator.currentOperator === "") === false && (calculator.currentNumber === "") === true ) {
                var kindOfOperator = calculator.currentOperator;

                equals(calculator.number1, calculator.number1, kindOfOperator);
            } else {} 

        break; 
}}