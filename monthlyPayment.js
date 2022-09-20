var $ = function(id) {
	return document.getElementById(id);
};

var calc = function() {
	var initial = parseFloat($("initial_loan").value);
	var months = parseFloat($("num_months").value);
	var interest = parseFloat($("annual_interest").value);
	var payment = $("payment_monthly").value;

	payment = initial * ((interest/(12*100))/(1 - ((1 + (interest/(12*100))) ** (-1 * months))))
	
	$("payment_monthly").value = "$" + payment.toFixed(2);
	
    return false;
	
};

 window.onload = function () 
{
    $("initial_loan").value = "";
    $("num_months").value = "";
	$("annual_interest").value = "";
	$("payment_monthly").value = "";
    //$("calc").onclick = calc;
}
