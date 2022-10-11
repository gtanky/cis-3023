var $ = function (id) {
	return document.getElementById(id);
};
for (; breakValue != "EXIT";) {
	var breakValue = "";
	var menu = function () {
		for (; ;) {
			var menuOption = parseInt(prompt("Menu\n\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Exponent\n6. Mean\n7. Quit"));
			if (!isNaN(menuOption) && menuOption > 0 && menuOption < 8) {
				return (menuOption);
			}
			alert("Please enter a number 1-7");
		}//for
	}//menu function

	var addition = function () {
		var num1 = numVerify("Enter the first number here");
		var num2 = numVerify("Enter the second number here");
		alert(num1 + num2);
	}//addition function

	var subtraction = function () {
		var num1 = numVerify("Enter the first number here");
		var num2 = numVerify("Enter the second number here that will be subtracted from the first");
		alert(num1 - num2);
	}//subtraction function

	var multiplication = function () {
		var num1 = numVerify("Enter the first number here");
		var num2 = numVerify("Enter the second number here that will be multiplied with the first");
		alert(num1 * num2);
	}//multiplication function

	var division = function () {
		var num1 = numVerify("Enter the first number / numerator here");
		var num2 = numVerify("Enter the second number / denominator here that the first number will be divided by");
		alert(num1 / num2);
	}//division function

	var exponential = function () {
		var num1 = numVerify("Enter the base number here");
		var num2 = numVerify("Enter the exponent here");
		alert(num1 ** num2);
	}//exponential function

	var average = function () {
		var num1 = 0;
		var num2 = 0;
		var meanCount = 0;
		for (; ;) {
			//alert(num2)
			num1 = prompt("Enter a number to add to the average here or enter '***' to end");
			if (!isNaN(parseFloat(num1))) {
				num2 += parseFloat(num1);
				meanCount++;
			}
			else if (num1 == "***") {
				break
			}
			else {
				alert("Please enter a number");
			}
		}//for
		alert(num2 / meanCount);
	}//average function

	var exitProgram = function () {
		alert("Thank you for using my Calculator, have a nice day!");
		breakValue = "EXIT";
	}//exit function

	var numVerify = function (promptText) {
		for (; ;) {
			num1 = parseFloat(prompt(promptText));
			if (!isNaN(num1)) {
				return (num1);
			}
			alert("Please enter a number");
		}//for
	}//verification function

	switch (menu() - 1) {
		case 0://Add
			addition();
			break;
		case 1://Subtract
			subtraction();
			break;
		case 2://Multiply
			multiplication();
			break;
		case 3://Divide
			division();
			break;
		case 4://Exponent
			exponential();
			break;
		case 5://Mean
			average();
			break;
		case 6://Quit
			exitProgram();
			break;
	}//switch
}//for
