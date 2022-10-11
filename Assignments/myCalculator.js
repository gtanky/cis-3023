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
			alert("Error! Please enter a number between 1-7");
		}//for
	}

	var addition = function () {
		var num1 = numVerify("Enter the first number here");
		var num2 = numVerify("Enter the second number here");
		alert(num1 + num2);
	}

	var subtraction = function () {
		var num1 = numVerify("Enter the first number here");
		var num2 = numVerify("Enter the second number here that will be subtracted from the first");
		alert(num1 - num2);
	}

	var multiplication = function () {
		var num1 = numVerify("Enter the first number here");
		var num2 = numVerify("Enter the second number here that will be multiplied with the first");
		alert(num1 * num2);
	}

	var division = function () {
		var num1 = numVerify("Enter the first number / numerator here");
		var num2 = numVerify("Enter the second number / denominator here that the first number will be divided by");
		alert(num1 / num2);
	}

	var exponential = function () {
		var num1 = numVerify("Enter the base number here");
		var num2 = numVerify("Enter the exponent here");
		alert(num1 ** num2);
	}

	var average = function () {
		var num1 = 0;
		var num2 = 0;
		var meanCount = 0;
		for (; ;) {
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
	}

	var exitProgram = function () {
		alert("Thank you for using my Calculator, have a nice day!");
		breakValue = "EXIT";
	}

	var numVerify = function (promptText) {
		for (; ;) {
			num1 = parseFloat(prompt(promptText));
			if (!isNaN(num1)) {
				return (num1);
			}
			alert("Please enter a number");
		}//for
	}

	switch (menu() - 1) {
		case 0:
			addition();
			break;
		case 1:
			subtraction();
			break;
		case 2:
			multiplication();
			break;
		case 3:
			division();
			break;
		case 4:
			exponential();
			break;
		case 5:
			average();
			break;
		case 6:
			exitProgram();
			break;
	}//switch
}//for
