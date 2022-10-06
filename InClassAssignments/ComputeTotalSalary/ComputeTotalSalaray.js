var $ = function (id) {
	return document.getElementById(id);
};

var getInfo = function () {
	var baseSalary = "";
	var totalSales = "";
	var bonusPercent = "";
	for (; ;) {
		for (; ;) {
			var salesPersonName = prompt("Enter sales person name");
			baseSalary = parseFloat(prompt("Enter base salary here"));
			if (isNaN(baseSalary) || baseSalary < 0) {
				alert("ERROR, number must be greater than 0");
				break//error
			}
			else if (!isNaN(baseSalary) && baseSalary > 0 && baseSalary < 25000) {
				//alert("5%");
				bonusPercent = .05;
				break//5% bonus needs to be added here.
			}
			else if (!isNaN(baseSalary) && baseSalary >= 25000 && baseSalary < 50000) {
				//alert("10%");
				bonusPercent = .10;
				break//10% bonus needs to be added here.
			}
			else if (!isNaN(baseSalary) && baseSalary >= 50000 && baseSalary < 100000) {
				//alert("15%");
				bonusPercent = .15;
				break//15% bonus needs to be added here.
			}
			else if (!isNaN(baseSalary) && baseSalary >= 100000) {
				//alert("20%");
				bonusPercent = .20;
				break//20% bonus needs to be added here.
			}

		}
		for (; ;) {
			totalSales = parseFloat(prompt("Enter total sales here"));
			if (isNaN(totalSales) || totalSales < 0) {
				alert("ERROR, number must be greater than 0");
				break//error
			}
			else if (!isNaN(totalSales) && baseSalary >= 0) {
				//alert("5%");
				bonusPercent = .05;
				break//5% bonus needs to be added here.
			}

		}
		var continueProgram = prompt("Would you like to run again? Enter either Yes or Y to run again");
		if (continueProgram.toLowerCase != "yes" && continueProgram.toLowerCase != "y") {
			alert("Thank you for using my program");
			break;
		}
	}


	/*
	salesTax = subtotal * (taxRate / 100);
	salesTax = parseFloat(salesTax.toFixed(2));
	total = salesTax + subtotal + shipping;
	
	$("sales_tax").value = "$" + salesTax.toFixed(2);
	$("total").value = "$" + total.toFixed(2);
	return false;
*/

};

getInfo();
window.onload = function () {
	$("subtotal").value = "";
	$("tax_rate").value = "";
	$("shipping_charges").value = "";
	$("calculate").onclick = calculate;
	//$("monthly_payment").focus();
}
