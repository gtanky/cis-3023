var $ = function(id) {
    return document.getElementById(id);
}

 var click = function() {
    var fullName = $("full_name").value;
    var initialLoanAmount = $("initial_loan").value;
    var numMonths = $("num_months").value;
    var annualInterest = $("annual_interest").value;
    var monthlyInterestRate = annualInterest / 1200;
    var monthlyPayment = $("monthly_payment").value;
    
    if (fullName == "") {        
        $("monthly_payment").value = "";
    }
    
    else if (initialLoanAmount < 0 || monthsOfLoan < 0 || annualInterest < 0 || annualInterest > 100) {    
        $("monthly_payment").value = "";
    }
    
    else {
        monthlyPayment = initialLoanAmount * (monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, monthsOfLoan * -1)));
            
        $("monthly_payment").value = "$" + monthlyPayment.toFixed(2);

        return false;
    }
 
}

window.onload = function() {
    $("initial_loan_amount").value = "";
    $("months_of_loan").value = "";
    $("annual_interest").value = "";
    $("calculate").onclick = click;
}
